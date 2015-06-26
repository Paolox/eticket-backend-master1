'use strict';

var ProductModel = require('../../models/product');
var logger = require('../logger');

var ProductsLib = function(){
  var self = this;

  self.getAll = function(callback){
    ProductModel.find().exec(function(error, data){
        callback(error, data);
    });
  };

  self.getById = function(id, callback){
    ProductModel.findOne({_id: id}).exec(function(error, data){
      if(!data){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, data);
    });
  };

<<<<<<< HEAD
  self.getByCode = function(code, callback){
    ProductModel.findOne({_code: code}).exec(function(error, data){
      if(!data){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, data);
    });
  };


=======
>>>>>>> f211bc13c54327cedf93d35f9d847b8411665a09
  self.create = function(productData, callback){
    var newProduct = new ProductModel(productData);

    newProduct.save(function(error, product, numAffected){
        callback(error, product);
    });
  };

  self.update = function(id, newData, callback){
    delete newData._id;

    ProductModel.findOneAndUpdate({ _id: id }, newData, function(error, result){
      if(!result){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, result);
    });
  };

  self.delete = function(id, callback){
    ProductModel.remove({_id: id}, function(error){
      callback(error, id);
    });
  };
};

module.exports = new ProductsLib();
