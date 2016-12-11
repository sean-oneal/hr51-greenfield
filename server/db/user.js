const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: String,
  email: String,
  city: String,
});


module.exports = User;