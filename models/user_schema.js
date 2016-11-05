'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  companyId: {
    type: String,
    required: true
  },
  department: {
    type: String
  },
  jobTitle: {
    type: String
  },
  gender: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  veteran: {
    type: Boolean,
    required: true
  },
  dependants: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
