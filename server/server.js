const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/broccoli');
var db = mongoose.connection;

const User = require('./db/models/user');

User.create({name: 'something', age: 100});


// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('we\'re connected');
// });
// app.get('/users', function (req, res) {
//   res.send('Hello World!')
// });

// app.get('*', function (req, res) {
//   res.send('Server is listening!')
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});