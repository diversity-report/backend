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
  genderIdentity: {
    type: String
  },
  race: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
