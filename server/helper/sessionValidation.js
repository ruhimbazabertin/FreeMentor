// eslint-disable-next-line import/no-unresolved
import Joi from '@hapi/joi';

const sessionSchema = Joi.object().keys({
  sessionId: Joi.number(),
  mentorId: Joi.number().required(),
  menteeId: Joi.number(),
  questions: Joi.string().min(4).required(),
  menteeEmail: Joi.string().email().required(),
  status: Joi.string().required(),

});

export default sessionSchema;
