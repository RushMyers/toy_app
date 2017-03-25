var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var UserSchema = new Schema ({
  username: Boolean,
  password: String,
  created_at: Date,
  updated_at: Date
});

var LocationSchema = new Schema ({
  name: String,
  address: String,
  machines: []
});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

var UserModel = mongoose.model('User', UserSchema);
var LocationModel = mongoose.model('Location', LocationSchema);

module.exports = {
  User: UserModel,
  Location: LocationModel
};



