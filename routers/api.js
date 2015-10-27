var express = require('express');
var router = express.Router();

// import controllers
var controllerDirPath = path.join(rootPath, 'app/controllers/');
/*var test = require(path.join(controllerDirPath, 'test'));

router.get('/test', test.sayHi);*/

module.exports = router;