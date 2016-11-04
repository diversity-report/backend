'use strict';

const Router = require('express').Router;
const CompanySchema = require('../model/company_schema');
const jsonParser = require('body-parser').json();
const HandleError = require('../controller/error_handler');

let companyRouter = module.exports = exports = Router();

companyRouter.post('/newCompany', jsonParser, function(req, res, next) {
  let newCompany = new CompanySchema({'companyName': req.body.companyName, 'city': req.body.city, 'state': req.body.state});
  newCompany.save(newCompany);
  res.json(newCompany);
  next();
});

companyRouter.get('/:companyId', function(req, res, next) {
  let DBError = HandleError(400, next, 'invalid id');
  let Err404 = HandleError(404, next);
  CompanySchema.findOne({'_id': req.params.companyId}).then((data) => {
    if (!data) return next(Err404(new Error('company not found.')));
    res.json(data);
  }, DBError);
});
