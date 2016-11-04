'use strict';

const Router = require('express').Router;
const UserSchema = require('../models/user_schema');
const jsonParser = require('body-parser').json();
const HandleError = require('../controller/error_handler');

let userRouter = module.exports = exports = Router();

//POST a new user associated with a company ID that already exists. Getting res.json data back, but it's not saving to the db.
//TODO fix bug to save user info to DB. Need this for GET requests to work.
userRouter.post('/newUser', jsonParser, function(req, res, next) {
  let newUser = new UserSchema({'companyId': req.body.companyId, 'department': req.body.department, 'jobTitle': req.body.jobTitle, 'gender': req.body.gender, 'race': req.body.race, 'veteran': req.body.veteran, 'dependants': req.body.dependants});
  newUser.save();
  res.json(newUser);
  next();
});

//GET all user data
userRouter.get('/', function(req, res) {
  UserSchema.find().then((data) => {
    res.json(data);
  });
});

//GET all user data with a specific companyId.
userRouter.get('/company/:companyId', function(req, res, next) {
  let DBError = HandleError(400, next, 'invalid company id');
  let Err404 = HandleError(404, next);
  UserSchema.find({'companyId': req.params.companyId}).then((data) => {
    if (!data) return next(Err404(new Error('users with this companyId not found')));
    res.json(data);
  }, DBError);
});
