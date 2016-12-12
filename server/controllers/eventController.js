const axios = require('axios');
const apiKey = require('../apiKey.js');

module.exports = {
  getEvent : (req, res) => {
    let category = req.query.category;
    let date = req.query.date || 'Today';
    let page = req.query.page || 1;
    let location = req.query.location || 'USA';

    if (!category) {
      return res.status(400).send('category must be defined');
    }

    axios.get('http://api.eventful.com/json/events/search?app_key=' + apiKey + '&c=' + category + '&date=' + date + '&page_size=4' + '&page_number=' + page + '&location=' + location)
    .then((response) => {
      console.log('RESPONSE', response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  } 

};