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
  //res.send('here you can add a new location');
    res.render('newLocation');
});



router.post('/add', function createNewLocation(req, res){
  User.findById(req.params._id)
    .exec(function (err, user){
      if (err) { console.log(err); }

      const newLocation = {
        name: req.body.name,
        address: req.body.address,
        machines: req.body.machines
      }

      //user.projectIdeas.push(newLocation)

      newLocation.save(function (err) {
        if (err) console.log(err);
        console.log('location created!')
      });

      res.redirect('/')
    });
});

router.get('/:id/edit', function(req, res) {
  res.send('here you can edit this location');
 });
module.exports = router;
