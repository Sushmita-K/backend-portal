module.exports = (function () {

    require('body-parser');
    let { submission } = require("../models/submission")

    const express = require('express');
    const router = express.Router();

    router.post('/', (req, res) => {
        let submissions = new submission({
            schoolId: req.body.schoollId,
            parentInterviewResponse: req.body.parentInterviewResponse
        })
        submissions.save().then(result => {
            res.send(result)
        }).catch((error) => {
            console.log(error)
        })

    })
    return router;
})();