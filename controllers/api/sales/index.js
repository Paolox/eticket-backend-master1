'use strict';

var salesLib = require('../../../lib/salesLib');

module.exports = function (router) {

  router.get('/', function (req, res) {

    salesLib.getAll(function(error, results){

      res.setHeader('Access-Control-Allow-Origin','*');

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(200).json(results).end();

    });

  });

  router.get('/:id', function (req, res) {

    var id = req.params.id;

    salesLib.getById(id, function(error, sale){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(sale).end();

    });
  });

  router.post('/', function (req, res) {

    var newSale = req.body;

    salesLib.create(newSale, function(error){

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(201).end();

    });
  });

  router.put('/:id', function (req, res) {

    var id = req.params.id;
    var newData = req.body;

    salesLib.update(id, newData, function(error, sale){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(sale).end();

    });
  });

  router.delete('/:id', function (req, res) {

    var id = req.params.id;

    salesLib.delete(id, function(error, sale){

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
