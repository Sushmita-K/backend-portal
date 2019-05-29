module.exports = (function () {

    require('body-parser');
    let { submission } = require("../models/submission")
    let { Parents } = require("../models/parents")

    const express = require('express');
    const router = express.Router();

    router.post('/:parentId', async (req, res) => {

        let parentDocument = await Parents.findOne({ externalId: req.params.parentId }).lean()

        let sub = await submission.findOne({ parentId: req.params.parentId }).lean();

        if (sub) {

            res.send({
                status: 500,
                message: "Parents already exists in the submissions"
            })

        } else {

            let submissions = new submission({
                schoolId: parentDocument.schoolId,
                parentId: parentDocument.externalId,
                answers: req.body.answers
            })

            submissions.save().then(result => {
                res.send(result)
            }).catch((error) => {
                console.log(error)
                res.send(error)
            })

            await Parents.findOneAndUpdate({ externalId: req.params.parentId }, { $set: { isSubmitted: true } })

        }

    })

    return router;

})();