var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require("connect-mongo")(session);
var methodOverride = require('method-override');
pry = require('pryjs');
require('dotenv').config();

var locations = require('./routes/locationsController');
var users = require('./routes/usersController.js');
var sessions = require('./routes/sessionsController.js');
var indexController = require('./routes/indexController.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

var db = require('./db/db.js');
mongoose.connect(process.env.MONGODB_URI);


//app.use('/users/:userId/locations', locations);
app.use('/users', users);
app.use('/sessions', sessions);
app.use('/', indexController);
app.use('/locations', locations);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


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
