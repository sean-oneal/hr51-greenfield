const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/users');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;