var bcrypt = require('bcrypt-nodejs');
var User = require('../models/users.js');

function createSecure(req, res, next) {
  var password = req.body.password;
  res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  next();
}

function loginUser(req, res, next) {
  var password = req.body.password;
  User.findOne({ username: req.body.username })
  .then(function(foundUser){
    if (foundUser == null) {
      res.json({status: 401, data: "unauthorized"});

    } else if (foundUser.password === password) {
      req.session.currentUser = foundUser;
    }
    next();
  })
  .catch(function(err){
    res.json({status: 500, data: err});
  });
}

// check if the CurrentUser's id matches the id in params
// function authorized(req, res, next) {
//   var theUser = req.params.id;
//   if (!theUser || req.params.id !== theUser._id) {
//     res.json({status: 404, data: "uh oh. you aren't authorized. haha"});
//       }
//   next();
// };


module.exports = {
  createSecure: createSecure,
  loginUser: loginUser,
  // authorized: authorized
};
