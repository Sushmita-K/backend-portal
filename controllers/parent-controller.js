module.exports = (function () {

    require('body-parser');
    let { Parents } = require("../models/parents")

    const express = require('express');
    const router = express.Router();

    router.get('/form', (req, res) => {
        Parents.find({}).then(result => {
            res.send(result)
        })
    })




    return router;
})();

