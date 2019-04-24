module.exports = (function () {

    require('body-parser');
    let { Parents } = require("../models/parents")
    const express = require('express');
    const router = express.Router();

    router.post('/', (req, res) => {
        let parents = new Parents({
            name: req.body.name,
            schoolId: req.body.schoolId,
            phoneNumber: req.body.phoneNumber,
            student: req.body.student,
            address: req.body.address
        })
        parents.save().then(result => {
            res.send(result)
            console.result(result)
        }).catch((error) => {
            console.log(error)
        })

    });

    router.get('/:id', (req, res) => {
        let headers = req.headers["auth"]
        if (!headers) {
            res.send({
                message: "Headers is not there",
                status: 500
            })
        }
        else {

            Parents.find({ schoolId: req.params.id }).then(result => {
                res.send({
                    status: 200,
                    message: "Parents fetched successfully",
                    result: result
                })
            })
        }
    })

    return router;
})();

