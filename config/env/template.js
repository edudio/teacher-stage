'use strict';

var host = 'localhost';
var database = 'seed';

module.exports = {
    host:host,
    port: process.env.PORT || 3000,
    db: 'mongodb://'+host+'/'+database
};