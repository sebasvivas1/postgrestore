const faker = require('faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limitNumber = 100;
    for (let index = 0; index < limitNumber; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.imageUrl(),
      });
    }
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  create(body) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...body
    }
    this.products.push(newProduct);
    return newProduct
  }

  update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("product not found")
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("prodduct not found");
    }
    this.products.splice(index, 1);
    return {id };
  }
}

module.exports = ProductsService;
