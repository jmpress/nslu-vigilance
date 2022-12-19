# nslu-vigilance
### Empowering members to use their voices.
#### Assistance in filing grievances, ULP forms, and other such stuff.
#### By Jeffrey Press

## Description
This app was built to carry out the following behaviors:<br>
+ Assist rank and file members of New Seasons Labor Union in knowing and utilizing their rights around the filing of Unethical Labor Practice claims through the National Labor Relations Board.
+ Allow member registration via local authentication, with email verification process to confirm.
+ Keep track of who is "Shop Steward" at each store. (Terminology may change depending on how we end up organizing, and who volunteers to help their coworkers in this way.)
+ Allow members to fill out a simple web form containing data relevant to form NLRB-501.
+ Information that is unlikely to change, such as Employer Address or Union Address can be left off to simplify the form, and can be accessed by importing the objects from the `./db/employerData.js` and `./db/unionData.js` files.
+ Notify the Shop Steward at that member's store that someone has submitted a form, and allow them access to view the form (including email address of submitter to allow follow-up communication).
+ The NLRB has a fillable .pdf for this form. There should be a method to allow a Shop Steward to use the form data to fill out the fillable .pdf and mail it to the NLRB contact defined in the `./db/nlrbData.js` file.

## Specs
+ User model has the following fields: firstName, lastName, storeNumber, email address,
   `npx sequelize-cli model:generate --name User --attributes first-name:string,last-name:string,email:string,store-number:integer,email-verified:boolean`
+ Ulpdata model has the following fields: submittedBy, 
   `npx sequelize-cli model:generate --name Ulpdata --attributes submitted-by:integer,subsec1:boolean,subsec2:boolean,subsec3:boolean,subsec4:boolean,subsec5:boolean,subsec6:boolean,subsec7:boolean,date-of-incident:string,staff-witnesses:string,offending-manager:string,incident-summary:text`
+ Create a method to do __blah__.
+ Create a route that does __blah__ and sends back __blah__.

## Setup/Installation Requirements
+ Fork and clone this repository locally.
+ Install Node.
+ Navigate to folder and run `npm install` in the console.
+ run `npm start` in the console.
+ navigate to localhost:3000 to begin using the program.

## Known Bugs
+ 

## Support and contact details
Please contact j.michael.press@gmail.com with questions, comments, or concerns. You are also welcome to submit a pull request.

## Technologies Used
   + Javascript
   + Node.js
   + Express
   + React
   + PostreSQL
   + Redis

## Notable `npm` packages
   + Sequelizer ORM
   + Passport.js
   
### License
This software is released under the GNU general public license.

Copyright (c) 2022 Jeffrey Michael Press
