module.exports = (function () {

    require('body-parser');
    const express = require('express');
    let { user } = require("../models/user")
    const router = express.Router();

    router.post('/', (req, res) => {



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


    router.get('/logout', (req, res) => {

        res.send({
            status: 200,
            message: "Logout Successfully",
        })
    });


    return router;
})();