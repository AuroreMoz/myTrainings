'use strict';

const Hapi = require('hapi');
const inert = require('inert');
const mongojs = require('mongojs');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

//Connect to db
server.app.db = mongojs('trainings');


server.register([

    require('./routes/trainings'),
    require('./routes/dataTypes'),
    require('./routes/templates')

], (err) => {

    if (err) {
        throw err;
    }

});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});