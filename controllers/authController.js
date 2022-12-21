const express = require('express');
const db = require('../models/index');
const Router = require('express-promise-router');
const authRouter = new Router();
const { makeSaltedHash, sanitizeInput } = require('../utils/utils');
//const passport = require('passport');



authRouter.post('/logout', (req, res, next) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      //console.log(req);
      res.status(200).send();         //TODO fix res.renders
    });
  });

authRouter.route('/register')
    .get((req, res, next) => {
        //res.render('newUser');
    })
    .post(async (req, res, next) => {
        const { first_name, last_name, email, user_pass_a, user_pass_b } = req.body;
        //check passA and passB are equal 
        if(user_pass_a !== user_pass_b){res.redirect('/auth/register');}
        //Salt and hash the pass
        const salted_hashed_pass = await makeSaltedHash(user_pass_a);
        //save new user to database.
        const newUser = {
            first_name, 
            last_name,
            email,
            store_number: 16,
            salted_hashed_pass,
            email_verified: false
        }
        const result = await db.User.create(newUser);
        const regUser = result.dataValues;
        res.status(200).send(regUser);
    });


authRouter.get('/profile', (req, res, next) => {
    console.log("PROFILE HERE");
    console.log(req.user)
    res.status(200).send();
})


//TODO make sure this validates the actual user model
//CURRENTLY not used
function validateUser(req, res, next){
    console.log(req.body);
    let { firstName, lastName, userEmail, userPassA, userPassB } = req.body;
    //check passA and passB are equal 
    if(userPassA !== userPassB){res.redirect('/auth/register');}
    console.log(firstName + ' ' + lastName + ' ' + userEmail);
    firstName = sanitizeInput(firstName, 255);
    lastName = sanitizeInput(lastName, 255);
    userEmail = sanitizeInput(userEmail, 255);
    const validUser = {
        firstName,
        lastName,
        userEmail,
        userPassA,
        userPassB,
    };
    req.body = validUser;
    next();
}

module.exports = authRouter;