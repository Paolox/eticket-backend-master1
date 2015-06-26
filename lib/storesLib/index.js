'use strict';

var StoreModel = require('../../models/store');
var logger = require('../logger');

var StoresLib = function(){
  var self = this;

  self.getAll = function(callback){
    StoreModel.find().exec(function(error, data){
        callback(error, data);
    });
  };

  self.getById = function(id, callback){
    StoreModel.findOne({_id: id}).exec(function(error, data){
      if(!data){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, data);
    });
  };

  self.create = function(storeData, callback){
    var newStore = new StoreModel(storeData);

    newStore.save(function(error, store, numAffected){
        callback(error, store);
    });
  };

  self.update = function(id, newData, callback){
    delete newData._id;

    StoreModel.findOneAndUpdate({ _id: id }, newData, function(error, result){
      if(!result){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, result);
    });
  };

  self.delete = function(id, callback){
    StoreModel.remove({_id: id}, function(error){
      callback(error, id);
    });
  };
};

module.exports = new StoresLib();
