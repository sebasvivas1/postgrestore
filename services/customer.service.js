const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {
  constructor() {}
  async find() {
    const res = await models.Customer.findAll({
      include: ['user'],
    });
    return res;
  }
  async findOne(id) {
    const res = await models.Customer.findByPk(id);

    if (!res) {
      throw boom.notFound('Customer not found');
    }
    return res;
  }
  async create(data) {
    const res = await models.Customer.create(data, {
      include: ['user'],
    });
    return res;
  }
  async update(id, data) {
    const res = await models.Customer.update(data, {
      where: { id },
    });
    return res;
  }
  async delete(id) {
    const res = await models.Customer.destroy({
      where: { id },
    });
    return res;
  }
}

module.exports = CustomerService;
