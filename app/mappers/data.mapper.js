const mapper = require('../database/mapper.cassandra');

const sensorMapper = mapper.forModel('Data');

module.exports = sensorMapper;