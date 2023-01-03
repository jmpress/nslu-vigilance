# nslu-vigilance
### Empowering members to use their voices.
#### Assistance in filing grievances, ULP forms, and other such stuff.
#### By Jeffrey Press

## Description
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
+ Steward model 
+ Store model
+ Admin model

## Setup/Installation Requirements
+ Fork and clone this repository locally.
+ Install Node.
+ Navigate to folder and run `npm install` in the console.
+ run `npm start` in the console.
+ navigate to localhost:3000 to begin using the program.

## Known Bugs
+ The NLRB has a fillable .pdf for this form. There should be a method to allow a Shop Steward to use the form data to fill out the fillable .pdf and mail it to the NLRB contact defined in the `./db/nlrbData.js` file.

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
