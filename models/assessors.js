let mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true)
let schema = new Schema(
    {
        userId: { type: String, index: { unique: true } },
        externalId: String,
        schools: Array
    })
let assessor = mongoose.model('assessors', schema);

module.exports = { assessor }


