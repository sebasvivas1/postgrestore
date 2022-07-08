const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const orders = [];
  const { limit } = req.query;
  const limitNumber = limit ? parseInt(limit, 10) : 10;
  for (let index = 0; index < limitNumber; index++) {
    orders.push({
      id: index,
      products: [
        {
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
        },
      ],
      totalPrice: faker.commerce.price(),
    });
  }
  res.json(orders);
});

router.get('/orders/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Orden 1',
    totalPrice: 1500,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Order created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Order updated',
    data: {
      id,
      body,
    },
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Order deleted',
    data: {
      id,
    },
  });
});

module.exports = router;
