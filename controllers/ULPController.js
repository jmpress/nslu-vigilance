const express = require('express');
const db = require('../models/index');
const Router = require('express-promise-router');
const ulpRouter = new Router();
const imageCache = require('../utils/cache');
const { sanitizeInput, sanitizeUlpdata, formatUlpdata } = require('../utils/utils');
const { isSteward } = require('../utils/authUtils');

//this should be locked down to admins
ulpRouter.get('/all', async (req, res, next) => {
    const rawUlpdata = await db.Ulpdata.findAll();
    const formattedUlpdata = formatUlpdata(rawUlpdata);
    res.status(200).send(formattedUlpdata);
});

//all tickets that match a currently logged-in steward's store
ulpRouter.get('/mystore', isSteward, async (req, res, next) => {
    console.log(`List of tickets belonging to store number ${req.user.store_number}`)
    const rawUlpdata = await db.Ulpdata.findAll({
                                            where:{
                                                store_number: req.user.store_number
                                            }
                                        });
    const formattedUlpdata = formatUlpdata(rawUlpdata);    
    res.status(200).send(formattedUlpdata);
});

//all tickets submitted by currently logged user
ulpRouter.get('/mine', async (req, res, next) => {
    console.log(`List of tickets belonging to User ${req.user.id}`);
    const rawUlpdata = await db.Ulpdata.findAll({
        where:{
            submitted_by: req.user.id
        }
    });
    const formattedUlpdata = formatUlpdata(rawUlpdata);
    res.status(200).send(formattedUlpdata);
});

ulpRouter.route('/:id')
    .get(async (req, res, next) => {
        //read ONE accessible ticket to show details
        const {dataValues} = await db.Ulpdata.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!dataValues){
            res.status(404).send();
        } else {
            res.status(200).send(dataValues);
        }
    })
    .put(async (req, res, next) => {
        //edit details of ONE accessible ticket
    });

ulpRouter.post('/new', async (req, res, next) => {
    //submit a brand-new ticket
    let { subsec1, subsec2, subsec3, subsec4, subsec5, subsec6, subsec7, date_of_incident, staff_witnesses, offending_manager, incident_summary } = req.body;
    const submitted_by = req.user.id;
    const store_number = req.user.store_number;
    let suspectData = { submitted_by, subsec1, subsec2, subsec3, subsec4, subsec5, subsec6, subsec7, date_of_incident, store_number, staff_witnesses, offending_manager, incident_summary };
    const cleanData = sanitizeUlpdata(suspectData);
    const newUlpdata = await db.Ulpdata.create(cleanData);
    res.status(200).send(newUlpdata);
});

ulpRouter.delete('/delete', async (req, res, next) => {
    //delete one accessible record
});



/*
ulpRouter.get('/:id', async (req, res, next) => {  
    const cachedValue = imageCache.get(req, res, next);
    let target;
    let caps;
    
    if(cachedValue){
        ({target, caps} = cachedValue);
    } else {
        //find image by ID along with all captions
        const targetIndex = req.params.id;
        console.log(targetIndex);
        //validate targetIndex
        target = await db.Image.findAll({
            where: {
                id: targetIndex
            }
        });
        caps = await db.Caption.findAll({
            where: {
                imageID: targetIndex
            }
        })
        res.locals.data = {target, caps};
        imageCache.set(req, res, next)
    }
    res.render('imageDetail', {image: target[0].dataValues, caption: caps, user:req.user});
});

ulpRouter.put('/caption/rate/:id', (req, res, next) => {
    //I need to reference both the caption ID and the new rating to add; what's the best way to pass this data in? probably ?id=x&?rating=y
    
    //find caption with id
    
    res.status(200).send();
});
*/

module.exports = ulpRouter;