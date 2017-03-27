var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var location = require('../models/locations.js');
var User = require('../models/users.js');
var authHelpers = require('../helpers/auth.js');

//POST new Location
//EDIT Location
//DELETE Location



router.get('/add', function(req, res) {
  res.send('here you can add a new location');
});

router.get('/:id/edit', function(req, res) {
  res.send('here you can edit this location');
 });
module.exports = router;
