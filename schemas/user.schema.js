const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3);
const email = Joi.string().email();
const password = Joi.string().min(6);
const image = Joi.string().uri();

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
  password: password,
  image: image,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };