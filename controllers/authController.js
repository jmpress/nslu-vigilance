/*

Use the library bcrypt and create registration, login, and logout endpoints.

You can create a hash from the users registration password and store it in the database. Once the user logs in, that password can be compared to the one stored in the database for authentication.

Make sure you’re able to create a user session.

*/

const express = require('express');
const db = require('../models/index');
const Router = require('express-promise-router');
const authRouter = new Router();
const { makeSaltedHash, comparePasswords, sanitizeInput } = require('../utils/utils');
const passport = require('passport');

authRouter.route('/login')
    .post(passport.authenticate('local', { 
        successRedirect: '/auth/profile',
        failureRedirect: '/auth/login' 
    }));

authRouter.post('/logout', (req, res, next) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/auth/login');         //TODO fix res.renders
    });
  });

authRouter.route('/register')
    .get((req, res, next) => {
        //res.render('newUser');
    })
    .post(async (req, res, next) => {
        console.log(req.body);
        const { firstName, lastName, userEmail, userPassA, userPassB } = req.body;
        //check passA and passB are equal 
        if(userPassA !== userPassB){res.redirect('/auth/register');}
        //Salt and hash the pass
        const saltedPass = await makeSaltedHash(userPassA);
        //save new user to database.
        const newUser = {
            "first-name": firstName, 
            "last-name": lastName,
            email: userEmail,
            "store-number": 16,
            "salted-hashed-pass": saltedPass,
            "email-verified": false
        }
        console.log(newUser);
        const regUser = await db.User.create(newUser);
        console.log("auto-generated ID:", regUser.id);
        req.body = regUser;
        
        console.log('dummy DB success message');
        res.redirect('/auth/login');
    });


authRouter.get('/profile', (req, res, next) => {
    console.log(req.user);
    res.status(200).send(req.user);
})


//TODO make sure this validates the actual user model
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