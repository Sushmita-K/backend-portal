const express = require("express");
const bodyParser = require('body-parser')

let questions = require("./controllers/question-controller")
let parents = require("./controllers/parent-controller")
let assessors = require("./controllers/assessor-controller")
let schools = require("./controllers/school-controller")
let users = require("./controllers/user-controllers")
let auth = require("./controllers/auth-controller")
let authUser = require("./middleware/authenticator")

require("./config")


const app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(authUser);
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use('/questions', questions);
app.use('/parents', parents);
app.use('/assessors', assessors);
app.use('/schools', schools);
app.use('/users', users);
app.use('/auth', auth);

app.listen(4201, () => {
    console.log("Server is listening on port 4201");
});
