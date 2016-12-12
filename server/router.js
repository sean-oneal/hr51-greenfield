const eventController = require('./controllers/eventController');

module.exports = (app) => {

  //verb, ep, cb fn
  app.get('/api/event', eventController.getEvent);

  app.post('/api/event', (req, res) =>  {
    res.send('World');
  });

}