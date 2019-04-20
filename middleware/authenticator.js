//header = req
// if(header)
// schools from the user collection
//else
// id is not sent 


let { user } = require("../models/user")


module.exports = function (req, res, next) {
    // header = req.headers['auth'];
    // let headers = req.headers['auth']

    // if (headers) {

    // }
    // next()
    // if (header) {
    //     user.findOne({ _id: req.body._id }, function (err, school) {
    //         if (school) {
    //             res.send({
    //                 schools: user.schools
    //             })

    //         }
    //         console.log(user.schools)
    //     })
    // }
    // else {
    //     res.send("id is not sent");
    //     next();

    // }
    // })
    next()
}





