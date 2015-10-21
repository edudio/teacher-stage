var Test = mongoose.model('Test');

exports.sayHi = function (req, res) {
    Test.find({},function(err,result){
        if(err){
            console.error(err);
            res.sendStatus(500);
        }
        res.status(200).json({msg:'hi:'+result});
    })
};