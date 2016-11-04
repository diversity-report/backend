'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const serverError = require('debug')('diversity-report:error');
const mongoose = require('mongoose');
const Promise = require('./lib/promise');
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dev');
const companyRoute = require('./routes/company_route');
const userRoute = require('./routes/user_route');

app.use(morgan('dev'));
app.use('/api/company', companyRoute);
app.use('/api/user', userRoute);

app.use((err, req, res, next) => {
  serverError(err);
  res.status(err.statusCode || 500).json(err.message);
  next();
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server up on ' + (process.env.PORT || 3000));
});
