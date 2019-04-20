module.exports = (function () {

    require('body-parser');
    let { Parents } = require("../models/parents")

    const express = require('express');
    const router = express.Router();

    router.get('/:id', (req, res) => {

        Parents.find({ schoolId: schoolId }).then(result => {

            res.send(result)
        })
    })
    router.get('/', (req, res) => {
        Parents.find({}).then(result => {

            res.send(result)
        })
    })
    return router;
})();

