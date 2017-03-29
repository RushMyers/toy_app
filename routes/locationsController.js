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

router.get('/:id', function showLocation(req, res) {
      Location.findById(req.params.id)
      .exec(function (err, location){
        if (err) { console.log(err); }
      res.render('locationShow', {
        location: location
      });
    });
});

router.post('/add', function createNewLocation(req, res){
  User.findById(req.params._id)
    .exec(function (err, user){
      if (err) { console.log(err); }

      var newLocation = new Location({
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

router.get('/:id/edit', /*authHelpers.authorized,*/ function editLocationPage(req, res) {
  Location.findById(req.params.id)
  .exec(function (err, location){
    if (err) { console.log(err); }

    // var thisLocation = location.id(req.params.id);

    res.render('edit.hbs', {
               location: location
      });

  });

});

router.put('/:id/edit', function(req, res) {
  Location.findByIdAndUpdate(req.params.id)
    .exec(function (err, location){
      if (err) { console.log(err); }
      if (!location) {console.log('oopsyyy');}
      // console.log(user.locations);
      // const thisLocation = location.id(req.params.id);
      // console.log('locations.id');
      location.name = req.body.name;
      location.address = req.body.address;
      location.machines = req.body.machines;
      location.save();
      res.redirect('/')
    });
  console.log('sup');
});

router.delete('/:id', function deleteLocation(req, res) {
  Location.findByIdAndRemove(req.params.id)
    .exec(function (err, location){
      if (err) { console.log(err); }
      // location.remove();

      // location.save(function (err) {
      //   if (err) console.log(err);
        console.log('Project Idea was removed')
        res.redirect('/')
      });
});

//create a DELETE "/:id" route that deletes the restaurant item
// router.delete('/:id', function(req, res) {
//     User.findByIdAndUpdate(req.params.userId, {
//         $pull: {
//             restaurant: {_id: req.params.id}
//         }
//     })
//         .exec(function(err, user) {
//             if (err) { console.log(err); }
//         });
//     Restaurant.findByIdAndRemove(req.params.id)
//         .exec(function(err, restaurant) {
//             if (err) { console.log(err); }
//             res.redirect(`/users/${req.params.userId}`);
//         });
// });


// DELETE THE MOUNT
// router.delete("/:id", function(req, res) {
//     User.findByIdAndUpdate(req.params.userId, {
//         $pull: {
//             mounts: {_id: req.params.id}
//         }
//     })
//         .exec(function(err, user) {
//             if (err) { console.log(err); }
//         });
//     Mount.findByIdAndRemove(req.params.id)
//         .exec(function(err, mounts) {
//             if (err) { console.log(err); }
//             res.redirect(`/users/${req.params.userId}`);
//         });
// });



module.exports = router;
