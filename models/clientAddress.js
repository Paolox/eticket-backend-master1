'use strict';

var mongoose = require('mongoose');

var clientAddressSchema = mongoose.Schema({
  client: {type: String, required:true},
  address: {type: String, required:true}
});

module.exports = mongoose.model('clientAdresses', clientAddressSchema );