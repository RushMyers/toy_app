var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toys');

var Location = require("../models/locations");

mongoose.promise = global.Promise;

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
