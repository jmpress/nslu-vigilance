//middleware via npm install
const express = require('express');
const app = express();
const session = require('express-session');

//security
const helmet = require('helmet');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');


const http = require('http');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const path = require('path');
const { comparePasswords } = require('./utils/utils');

//controllers
const ulpRouter = require('./controllers/ULPController');
const authRouter = require('./controllers/authController');

//database setup
const db = require('./models/index')
const connectRedis = require('connect-redis');
const {redisClient} = require('./db/sessionDB');
redisClient.connect().catch(console.error);
const RedisStore = connectRedis(session);


// set paths for static content
app.use('/public', express.static(path.join(__dirname, "public")));

//view engine setup
/* I want to use React for the frontend of this project*/

// Set localHost port to listen at
const PORT = process.env.PORT || 3000;

// Add middware for parsing request bodies here:
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

// Add middleware for handling CORS requests and security
app.use(cors());
app.use(helmet());

// middleware for logging
app.use(morgan('dev'));

// set up session
app.use(session({
    name: 'nsluUserToken',
    secret: process.env.SESSION_SECRET,  
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000*60*60, secure: false, sameSite: 'none' },
    secure: false,  //when in production, make it true.
    rejectUnauthorized: false,
    store: new RedisStore({client: redisClient})
  })
)
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  //console.log('inside Serialize')
  //console.log(user.id);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  //console.log('inside Deserialize');
  const loggedInUser = await db.User.findOne({
    where: {
      id: id
    }
  });
  //console.log(loggedInUser.dataValues)
  if (!loggedInUser.dataValues) {
    return done(new Error('failed to deserialize'));
  }
  done(null, loggedInUser.dataValues);

});

passport.use(
  new LocalStrategy(async function (username, password, done) {
    const result = await db.User.findOne({where: {email: username}})
    if(!result){return done(new Error('no result in db'));}
    const user = result.dataValues;
      if (!user) {
          console.log('Incorrect username.');
          return done(null, false, { message: 'Incorrect username.' });
      } else if (!(await comparePasswords(password, user.salted_hashed_pass))) {
          console.log('Incorrect password');
          return done(null, false, { message: 'Incorrect password.' });
      } else {
          console.log('ok');
          done(null, user);
      }
    })
  ); 
    
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.route('/auth/login')
    .post(passport.authenticate('local', { 
        successRedirect: '/auth/profile',
        failureRedirect: '/' 
    }));

app.use('/ulp', ulpRouter);
app.use('/auth', authRouter);

// Add your code to start the server listening at PORT below:   
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

function ensureAuthenticated(req, res, next) {
  if(req.isAuthenticated()){ return next() };
  res.redirect('/auth/login');
}

module.exports = {app};