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
  const category = service.update(id, body);
  res.json({
    message: 'Category updated',
    category
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.delete(id);
  res.json({
    message: 'Category deleted',
    category
  });
});

module.exports = router;
