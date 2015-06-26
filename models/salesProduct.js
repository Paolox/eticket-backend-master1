'use strict';

var mongoose = require('mongoose');

var salesProductSchema = mongoose.Schema({

  _sale:  {type: Number, required:true},
  _units: {type: Number, required:true},
  _product: {type: String, required:true},
  _client: {type: Number, required:true}

});

module.exports = mongoose.model('salesProducts', salesProductSchema );
