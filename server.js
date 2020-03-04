const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const client = require('./app/database/client.cassandra');

// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

const query = `CREATE TABLE IF NOT EXISTS sensors(name text PRIMARY KEY);`;
client.execute(query).then(_ => {
    console.log("Table created");
    const api = require("./app/routes/api");
    app.use('/api', api);

    // listen for requests
    app.listen(port, () => {
        console.log("Server is listening on port 3000");
    });
});

