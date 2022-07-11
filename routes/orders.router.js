const express = require('express');
const router = express.Router();
const OrdersService = require('../services/order.service');

const service = new OrdersService();
router.get('/', (req, res) => {
  const orders = service.find();
  res.json(orders);
});

router.get('/orders/:id', (req, res) => {
  const { id } = req.params;
  const order = service.findOne(id);
  res.json({
    order
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  const order = service.create(body);
  res.json({
    message: 'Order created',
    order
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const order = service.update(id, body);
  res.json({
    message: 'Order updated',
    order
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const order = service.delete(id);
  res.json({
    message: 'Order deleted',
    order
  });
});

module.exports = router;
