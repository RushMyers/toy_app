var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var location = require('../models/locations.js');
var User = require('../models/users.js');
var authHelpers = require('../helpers/auth.js');


/* GET home page. */
router.get('/', function(req, res) {
  // res.send('Sweet Home page, yo');
  //console.log(location.find({}));
  location.find({})
      .exec(function(err, location) {
          if(err) console.log(err);
          console.log(location);
          res.render('index', {
              location: location
          });
      });
});

module.exports = router;
