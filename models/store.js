'use strict';
var mongoose = require('mongoose');

var storeSchema = mongoose.Schema({

  _name:  {type: String, required:true},
  _lat: {type: Number, required:true},
  _lon: {type: Number, required:true},
  _address: {type: String, required:true}

});

module.exports = mongoose.model('stores', storeSchema );
