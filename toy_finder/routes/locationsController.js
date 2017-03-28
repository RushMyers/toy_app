var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Location = require('../models/locations.js');
var User = require('../models/users.js');
var authHelpers = require('../helpers/auth.js');

//POST new Location
//EDIT Location
//DELETE Location
//SHOW location


router.get('/add', function(req, res) {
  //res.send('here you can add a new location');
    res.render('newLocation');
});



router.post('/add', function createNewLocation(req, res){
  User.findById(req.params._id)
    .exec(function (err, user){
      if (err) { console.log(err); }

      var newLocation = new location({
        name: req.body.name,
        address: req.body.address,
        machines: req.body.machines
      });

      // user.projectIdeas.push(newLocation)

      console.log(newLocation);
      newLocation.save(function (err) {
        if (err) console.log(err);
        console.log('location created!')
      });

      res.redirect('/')
    });
});

router.get('/locations/:id/edit', function(req, res) {
  Location.findById(req.params.id)
    .exec(function (err, location){
      if (err) { console.log(err); }
      if (!location) {console.log('oopsyyy');}
      // console.log(user.locations);
      // const location = locations.id(req.params.id);
      // console.log('locations.id');

      res.render('edit.hbs', {
        location: location
        // user: user
      });
    });
  console.log('sup');
});
router.delete('/:id', function deleteLocation (req, res) {
  var location = Location.findById(req.params._id)
    .exec(function (err, user){
      if (err) { console.log(err); }

      location.remove();

      // user.save(function (err) {
      //   if (err) console.log(err);
      //   console.log('Project Idea was removed')
      // });

      res.render('/', {

      });
    });
});

module.exports = router;
