const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension);

// Scheama validations for game using JOI
module.exports.gameSchema = Joi.object({
    game: Joi.object({
        course: Joi.string().required().escapeHTML(),
        date: Joi.date().required(),
        numberOfHoles: Joi.number().valid(9, 18).required(),
        hole1: Joi.number().required(),
        hole2: Joi.number().required(),
        hole3: Joi.number().required(),
        hole4: Joi.number().required(),
        hole5: Joi.number().required(),
        hole6: Joi.number().required(),
        hole7: Joi.number().required(),
        hole8: Joi.number().required(),
        hole9: Joi.number().required(),
        hole10: Joi.number().optional().allow(null),
        hole11: Joi.number().optional().allow(null),
        hole12: Joi.number().optional().allow(null),
        hole13: Joi.number().optional().allow(null),
        hole14: Joi.number().optional().allow(null),
        hole15: Joi.number().optional().allow(null),
        hole16: Joi.number().optional().allow(null),
        hole17: Joi.number().optional().allow(null),
        hole18: Joi.number().optional().allow(null),
    }).required(),
});
