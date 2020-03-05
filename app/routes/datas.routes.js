module.exports = (router) => {
    const datas = require('../controllers/data.controller.js');

    // Create a new Sensor
    router.post('/datas', datas.create);

    // Retrieve all Sensors
    router.get('/datas', datas.findAll);

    // Retrieve all Sensors
    router.get('/datas/:sensorName', datas.findOne);

    router.put('/datas/:sensorName', datas.update);

    router.delete('/datas/:sensorName', datas.delete);


};