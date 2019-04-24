module.exports = (function () {

    require('body-parser');
    let { user } = require("../models/user")
    var bcrypt = require('bcrypt');

    const express = require('express');
    const router = express.Router();
    var BCRYPT_SALT_ROUNDS = 12;
    // var passwordHash = require('password-hash');

    router.post('/', (req, res) => {
        // bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS, function (err, hash, id) {
        let users = new user({

            email: req.body.email,
            password: req.body.password,
            schools: req.body.schools,
        })

        users.save().then(result => {
            res.send(result)
        }).catch((error) => {
            console.log(error)
        })

    })


    // });


    return router;
})();