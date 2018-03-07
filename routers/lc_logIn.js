global.AV = require('leancloud-storage')
var express = require('express');
var router = express.Router();


var APP_ID = process.env.APP_ID;
var APP_KEY = process.env.APP_KEY;

var user = new AV.User();

router.post('/', function(req, res, next) {

    AV.User.logIn(req.body.username, req.body.password).then(function (loginedUser) {
        console.log('LogIn Done!')
    }, (function (error) {
        console.log(error)
        console.log('LogIn Failure!')
    }))
})

module.exports = router;