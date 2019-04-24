var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var schema = new mongoose.Schema({
    email: { type: String, index: { unique: true } },
    password: String,
    schools: Array,
});
let user = mongoose.model('users', schema);

module.exports = { user }