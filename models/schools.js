var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema1 = new Schema(
    {
        name: String,
        externalId: String,
        address: String,
        state: String,
        country: String
    })
let schools = mongoose.model('schools', schema1);

module.exports = { schools }