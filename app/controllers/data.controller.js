const Data = require('../mappers/sensor.mapper');
const cassandra = require('cassandra-driver');

// Create and Save a new Sensor
exports.create = (req, res) => {

    let sensor = req.body;
    sensor.name = sensor.name.split(" ").join("_").toLowerCase();

    // Save Sensor in the database
    Sensor.insert(sensor)
        .then(_ => {
            res.status(201).send();
        }).catch(err => {
        console.log(err);

            res.status(500).send({
                message: err.message || "Some error occurred while creating the Sensor."
            });
        });

};

// Retrieve and return all sensors from the database.
exports.findAll = (req, res) => {
    Sensor.findAll()
        .then(response => {
            res.send(response._rs.rows);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving sensors."
        });
    });
};

exports.findOne = (req, res) => {
    Sensor.find({name: req.params.sensorName})
        .then(response => {
            console.log(response);
            if(!response) {
                return res.status(404).send({
                    message: req.params.sensorName + " not found"
                });
            }
            return res.status(200).send(response._rs.rows[0]);
        }).catch(err => {
            console.log(err);
            return res.status(500).send({
                message: "Error retrieving sensor"
            });
        });
};

exports.update = (req, res) => {
    let sensor = req.body;
    sensor.name = sensor.name.split(" ").join("_").toLowerCase();

    // Save Sensor in the database
    Sensor.update(sensor)
        .then(_ => {
            res.status(201).send();
        }).catch(err => {
        console.log(err);

        res.status(500).send({
            message: err.message || "Some error occurred while updating the Sensor."
        });
    });
};

exports.delete = (req, res) => {
    Sensor.remove({name: req.params.sensorName})
        .then(response => {
            console.log(response);
            if(!response) {
                return res.status(404).send({
                    message: req.params.sensorName + " not found"
                });
            }
            return res.status(200).send({message: req.params.sensorName + " deleted successfully"});
        }).catch(err => {
        console.log(err);
        return res.status(500).send({
            message: "Error deleting sensor"
        });
    });
};