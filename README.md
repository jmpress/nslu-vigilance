# nslu-vigilance
### Empowering members to use their voices.
#### Assistance in filing grievances, ULP forms, and other such stuff.
#### By Jeffrey Press

## Description
This is a work in progress.

This app was built to carry out the following behaviors:<br>
+ Assist rank and file members of New Seasons Labor Union in knowing and utilizing their rights around the filing of Unethical Labor Practice claims through the National Labor Relations Board.
+ Allow member registration via local authentication, with email verification process to confirm.
+ Keep track of who is "Shop Steward" (correct term?) at each store.
+ Notify the Shop Steward at that member's store that someone has submitted a form, and allow them access to view the form (including email address of submitter to allow follow-up communication).
+ Allow members to fill out a simple web form containing data relevant to form NLRB-501.
+ Information that is unlikely to change, such as Employer Address or Union Address is not included on the web form for simplicity of use for the end user, and can be accessed by importing the objects from the `./db/employerData.js` and `./db/unionData.js` files.


## Specs
+ User model 
+ Ulpdata model 
+ Store model

## Setup/Installation Instructions
+ Fork and clone this repository locally.
+ Install Node.
+ Navigate to folder and run `npm install` in the console.
+ To run this, you'll need to point it to both a PostgreSQL server and a Redis server by editting the `DATABASE_URL` and `SESSION_DATABASE_URL` variables in the `.env` file to match your servers.
+ If you don't have a PostgreSQL or Redis server yet, I recommend using Docker. Building a Docker image for this app is on my to-do list, but you can run the database servers using the latest Redis and PostgreSQL images on [Docker Hub](https://hub.docker.com/). More information about getting started with Docker can be found [here](https://blog.iron.io/how-to-create-a-docker-container/).
+ If you'd prefer to run your PostgreSQL server locally, see this [link](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/) for details on setting one up.
+ If you'd prefer to run your Redis server locally as well, try [this link](https://redis.io/docs/getting-started/installation/).
+ You'll also need 
+ run `npm test` in the console to create tables and seed with random data. It will then run several tests to make sure everything is working properly.
+ run `npm start` in the console to begin the server.
+ navigate to localhost:3000 to begin using the program.

## Known Bugs
+ The NLRB has a fillable .pdf for this form. There should be a method to allow a Shop Steward to use the form data to fill out the fillable .pdf and mail it to the NLRB contact defined in the `./db/nlrbData.js` file.

## Support and contact details
Please contact j.michael.press@gmail.com with questions, comments, or concerns. You are also welcome to submit a pull request.

## Technologies Used
   + Javascript
   + Node.js
   + Express
   + PostreSQL
   + Redis (currently running in a Docker container)
   + Testing stack: Mocha, Chai, and Supertest 

## Notable `npm` packages
   + Sequelize and sequelize-cli
   + Passport.js
   
### License
This software is released under the GNU general public license.

Copyright (c) 2022 Jeffrey Michael Press
