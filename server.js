require('./codeutils/global');
var Utils = require(path.join(rootPath,'codeutils/utils'));
var express = require('express');
var fs = require('fs');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var environment = require(path.join(rootPath,'config/environment'));

mongoose.connect(environment.db, function (err) {
    if (!err) {

        // require models by dirPath
        var modelsPath = path.join(rootPath,'app/models/');
        var loadModels = function (path) {
            fs.readdirSync(path).forEach(function (file) {
                var newPath = path + '/' + file;
                var stat = fs.statSync(newPath);
                if (stat.isFile()) {
                    if (/(.*)\.(js$|coffee$)/.test(file)) {
                        require(newPath);
                    }
                } else if (stat.isDirectory()) {
                    loadModels(newPath)
                }
            });
        };

        loadModels(modelsPath);

        // bootstrap express
        var app = express();
        require(path.join(rootPath,'config/express'))(app);

        var port = process.env.NODE_PORT || environment.port;
        var server = app.listen(port, function () {
            var host = server.address().address;
            var port = server.address().port;
            console.log('NODE_ENV = %s', env);
            console.log('server started at http://%s:%s', host, port)
        });

        module.exports = app;
    }
});

var dbConn = mongoose.connection;
dbConn.on('error', function (err) {
    console.error("Error while connecting to mongoDB:  " + err);
    process.exit(-1);
});
dbConn.on('disconnected', function () {
    console.error("Error: mongodb disconnected.");
    process.exit(-1);
});
dbConn.on('connected', function () {
    console.log('Connected to mongoDB');
});