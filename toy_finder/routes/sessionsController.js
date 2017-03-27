
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var authHelpers = require('../helpers/auth.js');

//GET login page
//POST create session
//DELETE session

router.get('/login', function(req, res) {
  res.render('loginpage.hbs');
});

router.post('/login', function(req, res){
  res.send("hi theree pleaseeeeeeeeeee");
  res.redirect('../');
});

// /users/' + req.params.id

router.delete('/', function(req, res){
  req.session.destroy(function(){
    res.redirect('/users');
  });
});

module.exports = router;
//=======================================
