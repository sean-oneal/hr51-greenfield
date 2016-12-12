const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  IP: String,
  category: String
});

module.exports = mongoose.model('User', userSchema);