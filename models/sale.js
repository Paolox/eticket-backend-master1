'use strict';

var mongoose = require('mongoose');

var saleSchema = mongoose.Schema({

    _date:  {type: Date, default: Date.now},
    _store: {type: String, required:true},
    _status: {type: String, required:true},
    _client: {type: String, required:true},
    _total: {type: Number, required:true},
    _cart: [{
        _units: {type: Number, required:true},
        _product: {type: String, required:true},
        _discount:  {type: Number, required:true},
        _cost: {type: Number, required:true}
        }]

});

module.exports = mongoose.model('sales', saleSchema );
