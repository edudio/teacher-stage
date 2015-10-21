var routersPath = path.join(rootPath, 'routers/');

var api = require(path.join(routersPath, 'api'));
var page = require(path.join(routersPath, 'page'));

module.exports = function (app) {
    app.use('/api', api);
    app.use('/page',page)
};