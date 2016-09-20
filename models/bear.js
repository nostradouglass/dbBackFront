var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var BearSchema = new Schema({
    name: {type: String, required: true},
    age: Number,
});

module.exports = mongoose.model('Bear', BearSchema)