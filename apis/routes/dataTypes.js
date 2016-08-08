'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');

exports.register = function(server, options, next) {

    const db = server.app.db;

    server.route({
        method: 'GET',
        path: '/dataTypes',
        handler: function (request, reply) {

            db.dataTypes.find((err, docs) => {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }

                reply(docs);
            });

        }
    });

    server.route({
        method: 'GET',
        path: '/dataTypes/{id}',
        handler: function (request, reply) {

            db.dataTypes.findOne({
                _id: request.params.id
            }, (err, doc) => {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }

                if (!doc) {
                    return reply(Boom.notFound());
                }

                reply(doc);
            });
        }
    });

    return next();
}

exports.register.attributes = {
    name: 'routes-dataTypes'
};
