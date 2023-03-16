const Joi = require('joi');
const fn = require('path').basename(__filename);
const { logger } = require('../logger/logger');

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });

const realNumbersSchema = Joi.object({
    num1: Joi.number().required(),
    num2: Joi.number().required()
});

exports.validateNumbers = validator(realNumbersSchema);
