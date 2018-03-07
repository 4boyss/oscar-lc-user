global.AV = require('leancloud-storage')
var express = require('express');
var router = express.Router();


var APP_ID = process.env.APP_ID;
var APP_KEY = process.env.APP_KEY;
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var user = new AV.User();

router.post('/', function(req, res, next) {

  user.setUsername(req.body.username)//(username);
  user.setPassword(req.body.password)//(password);
  //user.setEmail(email);
  user.signUp().then(function (loginedUser) {
      console.log('Created Done!')
  }, (function (error) {
      console.log(error)
      console.log('Created Failure!')
  }))
})

router.get('/:username', function(req, res, next) {
    let username = req.params.username

    var query = new AV.Query('Product')
    query.equalTo('description', username)
    query.find().then(function(results){
        console.log(results)
    }, function(error) {
        console.log('Empty!')
    })
})


module.exports = router;

