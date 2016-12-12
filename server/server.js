const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/broccoli');
const db = mongoose.connection;
const User = require('./db/models/user');

//mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//will pserve all static files
app.use(express.static(path.join(__dirname, '/../client/index.html')));

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to database'));

router(app);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});