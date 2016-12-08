const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User', {
  name: String,
  email: String,
  city: String,
});


module.exports = User;