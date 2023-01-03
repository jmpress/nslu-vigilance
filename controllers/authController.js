const express = require('express');
const db = require('../models/index');
const Router = require('express-promise-router');
const authRouter = new Router();
const { makeSaltedHash, sanitizeInput } = require('../utils/utils');


authRouter.post('/logout', (req, res, next) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.status(200).send();
    });
  });

authRouter.route('/register')
    .get((req, res, next) => {
        //res.render('newUser');
    })
    .post(validateUser, async (req, res, next) => {
        const { first_name, last_name, email, store_number, user_pass_a } = req.body;
        
        //Salt and hash the pass
        const salted_hashed_pass = await makeSaltedHash(user_pass_a);
        
        //save new user to database.
        const newUser = {
            first_name, 
            last_name,
            email,
            store_number,
            salted_hashed_pass,
            email_verified: false
        }
        const result = await db.User.create(newUser);
        const regUser = result.dataValues;

        //SEND EMAIL VERIFICATION HERE

        res.status(200).send(regUser);
    });


authRouter.get('/profile', (req, res, next) => {
    console.log("PROFILE HERE");
    res.status(200).send();
})


function validateUser(req, res, next){
    let { first_name, last_name, email, store_number, user_pass_a, user_pass_b } = req.body;
    //check passA and passB are equal 
    if(user_pass_a !== user_pass_b){res.redirect('/auth/register');}
    console.log(first_name + ' ' + last_name + ' ' + email);
    first_name = sanitizeInput(first_name, 255);
    last_name = sanitizeInput(last_name, 255);
    email = sanitizeInput(email, 255);
    const validUser = {
        first_name,
        last_name,
        email,
        store_number,
        user_pass_a,
        user_pass_b,
    };
    req.body = validUser;
    next();
}

module.exports = authRouter;