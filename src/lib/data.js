import Joi from 'joi';
import dynogels from 'dynogels';

export const client = dynogels;

export const Account = dynogels.define('betty-ddb-demo-accounts', {
  hashKey : 'email',

  // add the timestamp attributes (updatedAt, createdAt)
  timestamps : true,

  schema : {
    email   : Joi.string().email(),
    name    : Joi.string(),
    age     : Joi.number(),
    roles   : dynogels.types.stringSet(),
    settings : {
      nickname      : Joi.string(),
      acceptedTerms : Joi.boolean().default(false)
    }
  }
});
