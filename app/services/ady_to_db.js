/**
 * Created by solomon on 15/10/22.
 */

//LSS 从API拉取，插入

var consts = require(path.join(rootPath,'codeutils/consts'));

exports.getLssAppLists = function (callback) {
    request(consts.lss.getApp, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(null, body);
        } else {
            console.error(error);
            callback(error);
        }
    });
};


//DMS 从env拿到，插入

exports.getDmsAppLists = function(callback){
    var data = global.environment.aodianyun.dms;
    if(data){
        callback(null, data);
    }else{
        callback(new Error('cannot get dms from environment'));
    }
};