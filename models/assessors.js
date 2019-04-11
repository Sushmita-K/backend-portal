let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let schema = new Schema(
    {
        userId: String,
        externalId: String,
        schools: Array
    })
let assessor = mongoose.model('assessors', schema);

module.exports = { assessor }