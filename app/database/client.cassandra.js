// Configuring the database
const cassandra = require('cassandra-driver');

// Connecting to the database
const client = new cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'sensorsdemo'});

module.exports = client;