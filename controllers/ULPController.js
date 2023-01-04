//const express = require('express');
const db = require('../models/index');
const Router = require('express-promise-router');
const ulpRouter = new Router();
const { sanitizeUlpdata, formatUlpdata } = require('../utils/utils');
const { authorizeAdmin, authorizeSteward, authorizeSelf } = require('../utils/authUtils');

//this should be locked down to admins
ulpRouter.get('/all', authorizeAdmin, async (req, res, next) => {
    const rawUlpdata = await db.Ulpdata.findAll();
    const formattedUlpdata = formatUlpdata(rawUlpdata);
    res.status(200).send(formattedUlpdata);
});

//all tickets that match a currently logged-in steward's store
ulpRouter.get('/mystore', authorizeSteward, async (req, res, next) => {
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

//should be some authentication on this route
ulpRouter.route('/:id')
    .get(authorizeSelf, async (req, res, next) => {                       
        //read ONE accessible ticket to show details
        try{
            const {dataValues} = await db.Ulpdata.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send(dataValues);
        } catch {
            res.status(404).send();
        }
    })
    .put(authorizeSelf, async (req, res, next) => {
        //edit details of ONE accessible ticket
        await db.Ulpdata.update(req.body, {where: {id: req.body.id}});
        res.status(200).send();
    })
    .delete(authorizeAdmin, async (req, res, next) => {
        //delete one accessible record.
        const targetRecord = await db.Ulpdata.findAll({where: {id: req.params.id}});
        await db.Ulpdata.destroy({where: {id: req.params.id}});
        res.status(200).send(targetRecord[0].dataValues);
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

module.exports = ulpRouter;