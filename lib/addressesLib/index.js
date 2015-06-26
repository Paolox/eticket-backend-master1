'use strict';

var AddressModel = require('../../models/address');
var logger = require('../logger');

var AddressesLib = function(){
  var self = this;

  self.getAll = function(callback){
    AddressModel.find().exec(function(error, data){
        callback(error, data);
    });
  };

  self.getById = function(id, callback){
    AddressModel.findOne({_id: id}).exec(function(error, data){
      if(!data){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, data);
    });
  };

  self.create = function(addressData, callback){
    var newAddress = new AddressModel(addressData);

    newAddress.save(function(error, address, numAffected){
        callback(error, address);
    });
  };

  self.update = function(id, newData, callback){
    delete newData._id;

    AddressModel.findOneAndUpdate({ _id: id }, newData, function(error, result){
      if(!result){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, result);
    });
  };

  self.delete = function(id, callback){
    AddressModel.remove({_id: id}, function(error){
      callback(error, id);
    });
  };
};

module.exports = new AddressesLib();
