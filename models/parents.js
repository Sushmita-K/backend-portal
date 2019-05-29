var mongoose = require('mongoose');

let Parents = mongoose.model('Parents', {
    name: String,
    externalId: String,
    schoolId: String,
    phoneNumber: Number,
    student: String,
    address: String,
    isSubmitted: Boolean
});

module.exports = { Parents }