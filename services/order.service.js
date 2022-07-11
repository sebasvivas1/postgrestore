const faker = require('faker');
class OrderService {
  constructor() {
    this.orders = [];
    this.generate();
  }
  generate() {
    const limitNumber = 100;
    for (let index = 0; index < limitNumber; index++) {
      this.orders.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.imageUrl(),
      });
    }
  }

  find() {
    return this.orders;
  }
  findOne(id) {
    return this.orders.find((item) => item.id === id);
  }
  create(body) {
    const newOrder = {
      id: faker.datatype.uuid(),
      ...body,
    };
    return this.orders.push(newOrder);
  }
  update(id, body) {
    const index = this.orders.findIndex((item) => item.id === id);
    if (index === -1) {
      return new Error('order not found');
    }
    const order = this.orders[index];
    const newOrder = {
      ...order,
      ...body,
    };
    this.orders[index] = newOrder;
    return newOrder;
  }
  delete(id) {
    const index = this.orders.findIndex((item) => item.id === id);
    if (index === -1) {
      return new Error('order not found');
    }
    this.orders.splice(index, 1);
    return { id };
  }
}

module.exports = OrderService;
