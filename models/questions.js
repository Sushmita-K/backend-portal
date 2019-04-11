var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema3 = new Schema(
    {
        name: String,
        externalId: String,
        options: Array,
        studentName: String,
        inputType: String
    })

let questions = mongoose.model('Questions', schema3);

module.exports = { questions }