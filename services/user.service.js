const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');
class UserService {
  constructor() {}
  generate() {}
  async find() {
    const res = await models.User.findAll();
    return res;
  }
  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }
  async create(body) {
    const newUser = await models.User.create(body);
    return newUser;
  }
  async update(id, body) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    const res = await user.update(body);
    return res;
  }
  async delete(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
