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
            schoolId = await user.findOne({ _id: headers }, { schools: 1, _id: 0 }).lean()
            console.log(schoolId.schools);

            schools.find({ _id: { $in: schoolId.schools } }).then(result => {
                res.send({
                    status: 200,
                    message: "Schools fetched successfully",
                    result: result
                })
            })


        }


    })
    return router;
})();