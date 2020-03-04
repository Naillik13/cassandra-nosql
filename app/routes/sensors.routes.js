module.exports = (router) => {
    const sensors = require('../controllers/sensor.controller.js');

    // Create a new Beer
    router.post('/sensors', sensors.create);

    // Retrieve all Beers
    router.get('/sensors', sensors.findAll);

};