'use strict';

const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  numOfEmployees: {
    type: Number,
    required: true
  },
  gender: {
    female: {
      type: Number,
      default: 0
    },
    male: {
      type: Number,
      default: 0
    },
    nonbinary: {
      type: Number,
      default: 0
    },
    unreported: {
      type: Number,
      default: 0
    }
  },
  race: {
    arabMiddleEastern: {
      type: Number,
      default: 0
    },
    latinoHispanic: {
      type: Number,
      default: 0
    },
    blackAfricanAmerican: {
      type: Number,
      default: 0
    },
    asianPacificIslander: {
      type: Number,
      default: 0
    },
    nativeAmericanAlaskanNative: {
      type: Number,
      default: 0
    },
    nativeHawaiianPacificIslander: {
      type: Number,
      default: 0
    },
    whiteCaucasian: {
      type: Number,
      default: 0
    },
    unreported: {
      type: Number,
      default: 0
    }
  },
  veteran: {
    type: Number,
    default: 0
  },
  dependants: {
    type: Number,
    default: 0
  },
});

module.exports = mongoose.model('Company', companySchema);
