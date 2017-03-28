var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toys');

var Location = require("../models/locations");

mongoose.promise = global.Promise;

// Connect to database
// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI);
// }
// else {
//   mongoose.connect('mongodb://localhost/mountacular');
// }
// mongoose.connection.on('error', function(err) {
//   console.error('MongoDB connection error: ' + err);
//   process.exit(-1);
//   }
// );
// mongoose.connection.once('open', function() {
//   console.log("Mongoose has connected to MongoDB!");
// });

Location.remove({}, function(err) {
    console.log(err);
});

var kroger = new Location({
    name: 'Kroger',
    address: "3479 Memorial Drive in Decatur, Georgia 30032",
    machines: ['ninjas', 'homies', 'monster tattoos', 'aliens']
});

var pho24 = new Location({
    name: 'Pho 24',
    address: "4646 Buford Hwy NE Ste R Atlanta, GA 30341",
    machines: ['rat rings', 'homies', 'sticker machine', 'treasure chest']
})

kroger.save(function(err) {
  if (err) console.log(err);
  console.log('kroger created!');
});

pho24.save(function(err) {
  if (err) console.log(err);
  console.log('pho24 created!');
});
