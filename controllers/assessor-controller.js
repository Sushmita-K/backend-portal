module.exports = (function () {

    require('body-parser');
    let { assessor } = require("../models/assessors")

    const express = require('express');
    const router = express.Router();

    router.post('', (req, res) => {
        let assessors = new assessor({
            userId: req.body.userId,
            externalId: req.body.externalId,
            schools: req.body.schools
        })
        assessors.save().then(result => {
            res.send(result)
        }).catch((error) => {
            console.log(error)
        })

    });

    router.get('/', (req, res) => {
        assessor.find({}).then(result => {
            res.send(result)
        })
    })
    return router;
})();