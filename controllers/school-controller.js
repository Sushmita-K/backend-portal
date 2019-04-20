module.exports = (function () {

    require('body-parser');
    let { schools } = require("../models/schools")
    let { user } = require("../models/user")
    const express = require('express');
    const router = express.Router();

    router.post('/', (req, res) => {
        let school = new schools({
            externalId: req.body.externalId,
            name: req.body.name,
            address: req.body.address,
            state: req.body.state,
            country: req.body.country
        })
        school.save().then(result => {
            res.send(result)
        }).catch((error) => {
            console.log(error)
        })

    });
    router.get('/', async (req, res) => {

        let headers = req.headers["auth"]
        if (!headers) {
            res.send({
                message: "Headers is not there",
                status: 500
            })
        }
        else {
            let schoolId = await user.findOne({ _id: headers }, { schools: 1 }).lean()
            console.log("welcome");


        }


        // schools.find({ _id: { $in: schoolId } }).then(result => {
        //     res.send(result)
        // })
    })
    return router;
})();