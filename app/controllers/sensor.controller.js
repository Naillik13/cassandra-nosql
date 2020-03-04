const Sensor = require('../models/sensor.model');
const cassandra = require('cassandra-driver');
const TimeUuid = cassandra.types.TimeUuid;

// Create and Save a new Beer
exports.create = (req, res) => {

    // Create a Sensor
    const sensor = {
        name: req.body.name,
        sensorId: TimeUuid.now(),
        type: req.body.type
    };

    // Save Beer in the database
    Sensor.insert(sensor)
        .then(data => {
            res.status(201).send(data);
        }).catch(err => {
        console.log(err);

            res.status(500).send({
                message: err.message || "Some error occurred while creating the Beer."
            });
        });

};

// Retrieve and return all beers from the database.
exports.findAll = (req, res) => {

};

// Find a single beer with a beerId
exports.findOne = (req, res) => {

};

// Update a beer identified by the beerId in the request
exports.update = (req, res) => {

};

// Delete a beer with the specified beerId in the request
exports.delete = (req, res) => {

};