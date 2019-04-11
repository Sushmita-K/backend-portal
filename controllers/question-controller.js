module.exports = (function () {
    require('body-parser');

    let { questions } = require("../models/questions")
    const express = require('express');
    const router = express.Router();

    router.post('/', (req, res) => {
        let question = new questions({
            name: req.body.name,
            externalId: req.body.externalId,
            options: req.body.options,
            studentName: req.body.studentName,
            inputType: req.body.inputType
        })
        question.save().then(result => {
            res.send(result)
            console.result(result)
        }).catch((error) => {
            console.log(error)
        })

    });

    router.get('/', (req, res) => {
        questions.find({}).then(result => {
            res.send(result)
        })
    })

    return router;
})();