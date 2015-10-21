var Utils = function(){

};

Utils.prototype.parseJsonByPath = function(path){
    var ret = {};
    if(fs.existsSync(path)){
        ret = JSON.parse(fs.readFileSync(path, 'utf8'));
    }
    return ret;
};

module.exports = Utils;