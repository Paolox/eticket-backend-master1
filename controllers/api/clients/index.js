'use strict';

var clientsLib = require('../../../lib/clientsLib');
var mysecret = require('../../../config/secret');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = function (router) {
    router.get('/', function (req, res) {
        clientsLib.getAll(function(error, results){
            res.setHeader('Access-Control-Allow-Origin','*');
            if (error){
                return res.status(500).json(error).end();
            }
            res.status(200).json(results).end();
        });
    });

    // /*Version Hasheada*/
    // router.post('/', function(req, res, next) {
    //     var user = new clientsLib.ClientModel();
    //     user.username = req.body.username;
    //     user.booklist = [] ;
    //     bcrypt.hash(req.body.password, 10, function (err, hash) {
    //         user.password = hash;
    //         user.save(function(err,user) {
    //             if(err) { return(next(err)); }
    //             res.status(200).send();
    //         });
    //     });
    // });

    /*Version Hasheada*/
    // router.post('/api/login', function(req, res, next) {
    //     clientsLib.findOne({username: { $in: [req.auth.username] } })
    //     .select('password').select('username')
    //     .exec(function (err, user) {
    //         if (err) { return next(err); }
    //         if (!user) { return res.status(401).send(); }
    //         bcrypt.compare(req.body.password, user.password, function (err, valid) {
    //             if (err) { return next(err); }
    //             if (!valid) { return res.status(401).send(); }
    //             var token = jwt.encode({username: user.username}, mysecret.secret);
    //             res.status(200).send(token);
    //         });
    //     });
    // });

    router.post('/', function (req, res) {
        var data=req.body;
        var username=data.username;
        var password=data.password; //hash md5, over SSL

        //clientsLib.findOne( ){

        //});//
        var newClient = req.body;

        clientsLib.create(newClient, function(error){
            if (error){
                return res.status(500).json(error).end();
            }
            res.status(201).end();
        });
    });


    router.get('/:_mail', function (req, res) {
        var mail = req.params._mail;
        clientsLib.getByMail(mail, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(200).json(client).end();
        });
    });

    router.put('/:id', function (req, res) {
        var id = req.params.id;
        var newData = req.body;
        clientsLib.update(id, newData, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(200).json(client).end();
        });
    });

    router.delete('/:id', function (req, res) {
        var id = req.params.id;
        clientsLib.delete(id, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(204).end();
        });
    });

    router.get('/:_mail/:_address', function (req, res) {
        var mail = req.params._mail;
        var address = req.params._address;
        clientsLib.getByMail(mail, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(200).json(client).end();
        });
    });
/*var mysecret = require('../../../config/secret');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = function (router) {
    router.get('/', function (req, res) {
        clientsLib.getAll(function(error, results){
            res.setHeader('Access-Control-Allow-Origin','*');
            if (error){
                return res.status(500).json(error).end();
            }
            res.status(200).json(results).end();
        });
    }); */

    // /*Version Hasheada*/
    // router.post('/', function(req, res, next) {
    //     var user = new clientsLib.ClientModel();
    //     user.username = req.body.username;
    //     user.booklist = [] ;
    //     bcrypt.hash(req.body.password, 10, function (err, hash) {
    //         user.password = hash;
    //         user.save(function(err,user) {
    //             if(err) { return(next(err)); }
    //             res.status(200).send();
    //         });
    //     });
    // });

    /*Version Hasheada*/
    // router.post('/api/login', function(req, res, next) {
    //     clientsLib.findOne({username: { $in: [req.auth.username] } })
    //     .select('password').select('username')
    //     .exec(function (err, user) {
    //         if (err) { return next(err); }
    //         if (!user) { return res.status(401).send(); }
    //         bcrypt.compare(req.body.password, user.password, function (err, valid) {
    //             if (err) { return next(err); }
    //             if (!valid) { return res.status(401).send(); }
    //             var token = jwt.encode({username: user.username}, mysecret.secret);
    //             res.status(200).send(token);
    //         });
    //     });
    // });

    /*router.post('/', function (req, res)
        var data=req.body;
        var username=data.username;
        var password=data.password; //hash md5, over SSL

        //clientsLib.findOne( ){

        //});//
        var newClient = req.body;

        clientsLib.create(newClient, function(error){
            if (error){
                return res.status(500).json(error).end();
            }
            res.status(201).end();
        });
    });


    router.get('/:_mail', function (req, res) {
        var mail = req.params._mail;
        clientsLib.getByMail(mail, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(200).json(client).end();
        });
    });

    router.put('/:id', function (req, res) {
        var id = req.params.id;
        var newData = req.body;
        clientsLib.update(id, newData, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(200).json(client).end();
        });
    });

    router.delete('/:id', function (req, res) {
        var id = req.params.id;
        clientsLib.delete(id, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(204).end();
        });
    });

    router.get('/:_mail/:_address', function (req, res) {
        var mail = req.params._mail;
        var address = req.params._address;
        clientsLib.getByMail(mail, function(error, client){
            if (error){
                if (error.message === 'NOT_FOUND'){
                    return res.status(404).end();
                }
                return res.status(500).json(error).end();
            }
            res.status(200).json(client).end();
        });
    });*/
};
