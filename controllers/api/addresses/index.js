'use strict';

var addressesLib = require('../../../lib/addressesLib');

module.exports = function (router) {

  router.get('/', function (req, res) {

    addressesLib.getAll(function(error, results){

      res.setHeader('Access-Control-Allow-Origin','*');

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(200).json(results).end();

    });

  });

  router.get('/:id', function (req, res) {

    var id = req.params.id;

    addressesLib.getById(id, function(error, address){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(address).end();

    });
  });

  router.post('/', function (req, res) {

    var newAddress = req.body;

    addressesLib.create(newAddress, function(error){

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(201).end();

    });
  });

  router.put('/:id', function (req, res) {

    var id = req.params.id;
    var newData = req.body;

    addressesLib.update(id, newData, function(error, address){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(address).end();

    });
  });

  router.delete('/:id', function (req, res) {

    var id = req.params.id;

    addressesLib.delete(id, function(error, address){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(204).end();

    });
  });


};
