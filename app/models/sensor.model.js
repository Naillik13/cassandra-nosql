const mapper = require('../database/mapper.cassandra');

const sensorMapper = mapper.forModel('Sensor');

module.exports = sensorMapper;