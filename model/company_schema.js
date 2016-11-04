'use strict';

const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Company', companySchema);
