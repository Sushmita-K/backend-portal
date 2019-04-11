module.exports = (function () {

    require('body-parser');
    let { schools } = require("../models/schools")
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
    router.get('/', (req, res) => {
        schools.find({}).then(result => {
            res.send(result)
        })
    })
    return router;
})();