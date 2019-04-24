var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema3 = new Schema(
    {
        questions: String,
        externalId: String,
        options: Array,
        value: String,
        studentName: String,
        inputType: String
    })

let questions = mongoose.model('Questions', schema3);

module.exports = { questions }