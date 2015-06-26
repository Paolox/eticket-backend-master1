'use strict';

var storesLib = require('../../../lib/storesLib');

module.exports = function (router) {

  router.get('/', function (req, res) {

    storesLib.getAll(function(error, results){

      res.setHeader('Access-Control-Allow-Origin','*');

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(200).json(results).end();

    });

  });

  router.get('/:id', function (req, res) {

    var id = req.params.id;

    storesLib.getById(id, function(error, store){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(store).end();

    });
  });

  router.post('/', function (req, res) {

    var newStore = req.body;

    storesLib.create(newStore, function(error){

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(201).end();

    });
  });

  router.put('/:id', function (req, res) {

    var id = req.params.id;
    var newData = req.body;

    storesLib.update(id, newData, function(error, store){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(store).end();

    });
  });

  router.delete('/:id', function (req, res) {

    var id = req.params.id;

    storesLib.delete(id, function(error, store){

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
