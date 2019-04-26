var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema(
    {
        schoolId: String,
        parentId: String,
        answers: Array
    })
let submission = mongoose.model('submissions', schema);

module.exports = { submission }