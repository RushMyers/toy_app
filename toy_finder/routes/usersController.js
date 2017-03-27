var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var location = require('../models/locations.js');
var User = require('../models/users.js');
var authHelpers = require('../helpers/auth.js');
//GET Signup page
//GET show user page (users/show)
//POST sign up for website

//show user
router.get('/', function(req, res) {
  res.send('ok cool!')
});
//TO SIGN UP PAGE
router.get('/signup', function(req, res) {
   // res.send('sign up page here');
   res.render('signUpPage');
});
//SIGN UP
router.post('/', authHelpers.createSecure, function(req, res){

  var user = new User({
    username: req.body.username,
    password_digest: res.hashedPassword
  });

  user.save(function(err, user) {
    if (err) console.log(err);
    console.log(user);
    console.log(req.session.currentUser);
    res.redirect('/login');
  });
res.redirect('/login');
});

router.get('/login', function(req, res) {
  // res.send('login page here');
  res.render('loginpage');
});

router.get('/add', function(req, res) {
  res.send('here you can add a new location');
});

module.exports = router;
