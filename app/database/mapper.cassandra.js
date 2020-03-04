const cassandra = require('cassandra-driver');
const Mapper = cassandra.mapping.Mapper;
const client = require('../database/client.cassandra.js');
const UnderscoreCqlToCamelCaseMappings = cassandra.mapping.UnderscoreCqlToCamelCaseMappings;

const mappingOptions = {
    models: {
        'Sensor': {
            tables: ['sensors'],
            mappings: new UnderscoreCqlToCamelCaseMappings()
        }
    }
};

const mapper = new Mapper(client, mappingOptions);

module.exports = mapper;