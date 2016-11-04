'use strict';

const Router = require('express').Router;

let companyRouter = module.exports = exports = Router();

companyRouter.get('/', function(req, res, next) {
  res.json('testing the home route');
  next();
});
