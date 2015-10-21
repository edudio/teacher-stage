'use strict';

// Load app configuration
module.exports = _.extend(
    require(__dirname + '/env/template.js'),
    require(__dirname + '/env/' + (process.env.NODE_ENV || 'development') + '.js') || {});
