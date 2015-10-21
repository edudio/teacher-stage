var test = new mongoose.Schema({
    test: {type: String, required: true}
});

test.index({test: 1}, {unique: true});

mongoose.model('Test', test, 'tests');