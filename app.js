const express = require("express");
const bodyParser = require('body-parser')

let questions = require("./controllers/question-controller")
let parents = require("./controllers/parent-controller")
let assessors = require("./controllers/assessor-controller")
let schools = require("./controllers/school-controller")

require("./config")


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use('/questions', questions);
app.use('/parents', parents);
app.use('/assessors', assessors);
app.use('/schools', schools);

app.listen(4201, () => {
    console.log("Server is listening on port 4201");
});
