'use strict';

var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  _name:  {type: String, required:true},
  _price: [{
      _units: {type: Number, required:true},
      _store: {type: String, required:true},
      _discount:  {type: Number, required:true},
      _unitPrice: {type: Number, required:true}
  }],
  _code: {type: String, index: {unique: true, dropDups: true}},
  _tags: [{ type: String, index: true }]


});

module.exports = mongoose.model('products', productSchema );
