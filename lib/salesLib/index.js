'use strict';

var SaleModel = require('../../models/sale');
var logger = require('../logger');

var SalesLib = function(){
  var self = this;

  self.getAll = function(callback){
    SaleModel.find().exec(function(error, data){
        callback(error, data);
    });
  };

  self.getById = function(id, callback){
    SaleModel.findOne({_id: id}).exec(function(error, data){
      if(!data){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, data);
    });
  };

  self.create = function(saleData, callback){
    var newSale = new SaleModel(saleData);

    newSale.save(function(error, sale, numAffected){
        callback(error, sale);
    });
  };

  self.update = function(id, newData, callback){
    delete newData._id;

    SaleModel.findOneAndUpdate({ _id: id }, newData, function(error, result){
      if(!result){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, result);
    });
  };

  self.delete = function(id, callback){
    SaleModel.remove({_id: id}, function(error){
      callback(error, id);
    });
  };
};

module.exports = new SalesLib();
