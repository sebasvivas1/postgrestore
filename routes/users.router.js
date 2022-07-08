const express = require('express');
const UsersService = require('./../services/user.service');

const router = express.Router();
const service = new UsersService();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.status(200).json(user);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'User created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'User updated',
    data: {
      id,
      body,
    },
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'User deleted',
    data: {
      id,
    },
  });
});

module.exports = router;
