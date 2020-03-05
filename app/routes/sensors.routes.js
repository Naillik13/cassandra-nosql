module.exports = (router) => {
    const sensors = require('../controllers/sensor.controller.js');

    // Create a new Sensor
    router.post('/sensors', sensors.create);

    // Retrieve all Sensors
    router.get('/sensors', sensors.findAll);

    // Retrieve all Sensors
    router.get('/sensors/:sensorName', sensors.findOne);

    router.put('/sensors/:sensorName', sensors.update);

    router.delete('/sensors/:sensorName', sensors.delete);


};