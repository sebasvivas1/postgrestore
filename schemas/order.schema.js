const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3);
const price = Joi.number().min(15);
const image = Joi.string().uri();

const createOrderSchema = Joi.object({
  name: name.required(),
  price: name.required(),
  image: image.required(),
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

const updateOrderSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

module.exports = { createOrderSchema, getOrderSchema, updateOrderSchema };
