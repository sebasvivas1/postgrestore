const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const CategoryService = require('./../services/category.service');
const {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} = require('./../schemas/category.schema');

const router = express.Router();
const service = new CategoryService();

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.post(
  '/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res) => {
    const body = req.body;
    res.json({
      message: 'Category created',
      data: body,
    });
  }
);

router.patch(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const category = service.update(id, body);
    res.json({
      message: 'Category updated',
      category,
    });
  }
);

router.delete(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const category = service.delete(id);
    res.json({
      message: 'Category deleted',
      category,
    });
  }
);

module.exports = router;
