module.exports = (function () {

    require('body-parser');
    const express = require('express');
    let { user } = require("../models/user")
    // var bcrypt = require('bcrypt');

    const router = express.Router();

    router.post('/', (req, res) => {
        // bcrypt.compare(req.body.password, hash, function (res) {


        user.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
            console.log(req.body.email, req.body.password)
            if (!user) {

                res.send({
                    status: 500,
                    message:
                        "Invalid username or password"
                })
            }
            else {

                res.send({
                    status: 200,
                    message: "Login Successfully",
                    token: user._id
                })
            }

        })
    });

    return router;
})();