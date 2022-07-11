const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const {
  getOrderSchema,
  createOrderSchema,
  updateOrderSchema,
} = require('../schemas/order.schema');
const router = express.Router();
const OrdersService = require('../services/order.service');

const service = new OrdersService();
router.get('/', (req, res) => {
  const orders = service.find();
  res.json(orders);
});

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = service.findOne(id);
      res.json({
        order,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const order = service.create(body);
      res.json({
        message: 'Order created',
        order,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const order = service.update(id, body);
      res.json({
        message: 'Order updated',
        order,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const order = service.delete(id);
    res.json({
      message: 'Order deleted',
      order,
    });
  }
);

module.exports = router;
