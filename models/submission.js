var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema(
    {
        schoolInfo: Object,
        parentInterviewResponse: Object,
        schoolId: String
    })
let submission = mongoose.model('submissions', schema);

module.exports = { submission }