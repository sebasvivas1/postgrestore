const express = require('express');
const CategoryService = require('./../services/category.service');

const router = express.Router();
const service = new CategoryService();

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Category created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Category updated',
    data: {
      id,
      body,
    },
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Category deleted',
    data: {
      id,
    },
  });
});

module.exports = router;
