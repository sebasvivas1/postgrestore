const faker = require('faker');
class CategoryService {
  constructor() {
    this.categories = [];
    this.generate();
  }
  generate() {
    const limitNumber = 100;
    for (let index = 0; index < limitNumber; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      });
    }
  }
  find() {
    return this.categories;
  }
  findOne(id) {
    return this.categories.find((item) => item.id === id);
  }
  create() {}
  update() {}
  delete() {}
}

module.exports = CategoryService;
