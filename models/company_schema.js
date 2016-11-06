'use strict';

const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
  companyName: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  state: { type: String,required: true},
  numOfEmployees: { type: Number, required: true },
  gender: {
    female: { type: Number },
    male: { type: Number },
    nonbinary: { type: Number },
    unreported: { type: Number }
  },
  race: { 
    arabMiddleEastern: { type: Number },
    latinoHispanic: { type: Number },
    blackAfricanAmerican: { type: Number },
    asianPacificIslander: { type: Number },
    nativeAmericanAlaskanNative: { type: Number },
    nativeHawaiianPacificIslander: { type: Number },
    whiteCaucasian: { type: Number },
    unreported: { type: Number }
  },
  veteran: { type: Number },
  dependants: { type: Number }
});

module.exports = mongoose.model('Company', companySchema);
