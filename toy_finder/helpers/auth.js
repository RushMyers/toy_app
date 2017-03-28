var bcrypt = require('bcrypt-nodejs');
var User = require('../models/users.js');

function createSecure(req, res, next) {
  var password = req.body.password;
  res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  next();
};

function loginUser(req, res, next) {
  var password = req.body.password;
//check here
  User.findOne({ username: req.body.username })
  .then(function(foundUser){
    console.log('whatlkalsdflkjasdk;ljasdf');
    var passwordGood = bcrypt.compareSync(password, foundUser.password_digest);

    if (foundUser == null || !passwordGood) {
      res.json({status: 401, data: "unauthorized"});
      console.log('userrrrrrrrr not fouuuuuuuuuuuund');

    } else if (passwordGood) {
      req.session.currentUser = foundUser;
      console.log('userrrrrrrrrrr fffouuuuuuuuuuund yesssss');
    }
    next();
  })
  .catch(function(err){
  res.json({status: 500, data: err});
  });
}


//check if the CurrentUser's id matches the id in params
function authorized(req, res, next) {
  var theUser = req.params.id;
  console.log(currentUser);
  if (!req.session.currentUser || req.params.id !== req.session.currentUser._id) {
    return res.json({status: 404, data: "uh oh. you aren't authorized. haha. please sign in."});
    }
  next();
};


module.exports = {
  createSecure: createSecure,
  loginUser: loginUser,
  authorized: authorized
};
