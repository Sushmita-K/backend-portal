module.exports = (function () {
    require('body-parser');

    let { questions } = require("../models/questions")
    const express = require('express');
    const router = express.Router();

    router.post('/', (req, res) => {
        let question = new questions({

            questions: req.body.questions,
            externalId: req.body.externalId,
            options: req.body.options,
            value: req.body.value,
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

        let headers = req.headers["auth"]
        if (!headers) {
            res.send({
                message: "Headers is not there",
                status: 500
            })
        }
        else {

            questions.find({}).then(result => {
                res.send({
                    status: 200,
                    message: "Questions fetched successfully",
                    result: result
                })
            })
        }
    })

    return router;
})();