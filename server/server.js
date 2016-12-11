const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/broccoli');
const db = mongoose.connection;

// const home = require('/../../index.html');

const User = require('./db/models/user');

User.create({name: 'something', age: 100});

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('we\'re connected');
});

app.sendFile(path.join(__dirname + '../index.html'));


app.get('/', function (req, res) {
  res.send('hello');
});

app.all('*', function (req, res) {
  res.send('Server is listening for everything!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});