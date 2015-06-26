'use strict';

var mongoose = require('mongoose');

var addressSchema = mongoose.Schema({

  _line1: {type: String, required:true},
  _line2: {type: String, required:false},
  _county: {type: String, required:true},
  _city: {type: String, required:true},
  _region: {type: String, required:true}

});

module.exports = mongoose.model('addresses', addressSchema );
