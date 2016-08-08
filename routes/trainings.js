'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');

exports.register = function(server, options, next) {

    const db = server.app.db;

    server.route({
        method: 'GET',
        path: '/trainings',
        handler: function (request, reply) {

            db.trainings.find((err, docs) => {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }

                reply(docs);
            });

        }
    });

    server.route({
        method: 'GET',
        path: '/trainings/{id}',
        handler: function (request, reply) {

            db.trainings.findOne({
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

    server.route({
        method: 'POST',
        path: '/trainings',
        handler: function (request, reply) {

            const training = request.payload;

            //Create an id
            training._id = uuid.v1();

            db.trainings.save(training, (err, result) => {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }

                reply(training);
            });
        },
        config: {
            validate: {
                payload: {
                    title: Joi.string().min(10).max(50).required(),
                    author: Joi.string().min(10).max(50).required(),
                    isbn: Joi.number()
                }
            }
        }
    });

    server.route({
        method: 'PATCH',
        path: '/trainings/{id}',
        handler: function (request, reply) {

            db.trainings.update({
                _id: request.params.id
            }, {
                $set: request.payload
            }, function (err, result) {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }

                if (result.n === 0) {
                    return reply(Boom.notFound());
                }

                reply().code(204);
            });
        },
        config: {
            validate: {
                payload: Joi.object({
                    title: Joi.string().min(10).max(50).optional(),
                    author: Joi.string().min(10).max(50).optional(),
                    isbn: Joi.number().optional()
                }).required().min(1)
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/trainings/{id}',
        handler: function (request, reply) {

            db.trainings.remove({
                _id: request.params.id
            }, function (err, result) {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }

                if (result.n === 0) {
                    return reply(Boom.notFound());
                }

                reply().code(204);
            });
        }
    });

    return next();
}

exports.register.attributes = {
    name: 'routes-trainings'
};