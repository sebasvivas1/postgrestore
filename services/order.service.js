const faker = 'faker';
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
  create() {}
  update() {}
  delete() {}
}

module.exports = OrderService;
