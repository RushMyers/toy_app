var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var location = require('../models/locations.js');
var user = require('../models/users.js');


/* GET home page. */
router.get('/', function(req, res) {
  // res.send('Sweet Home page, yo');
  location.find({})
      .exec(function(err, location) {
          if(err) console.log(err);
          console.log(location);
          res.render('index', {
              location: location
          });
      });
});

router.get('/signup', function(req, res) {
  res.send('sign up page here');
});

router.get('/login', function(req, res) {
  res.send('login page here');
});

router.get('/add', function(req, res) {
  res.send('here you can add a new location');
});

router.get('/:id/edit', function(req, res) {
  res.send('here you can edit this location');
 });
module.exports = router;
