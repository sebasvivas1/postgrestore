const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
} = require('../schemas/user.schema');
const UsersService = require('./../services/user.service');

const router = express.Router();
const service = new UsersService();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = service.findOne(id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    res.json({
      message: 'User created',
      data: body,
    });
  }
);

router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      res.json({
        message: 'User updated',
        data: {
          id,
          body,
        },
      });
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    res.json({
      message: 'User deleted',
      data: {
        id,
      },
    });
  }
);

module.exports = router;
