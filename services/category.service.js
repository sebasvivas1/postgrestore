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
  create(body) {
    const newCategory = {
      id: faker.datatype.uuid(),
      body
    }
    return this.categories.push(newCategory);
  }
  update(id, changes) {
    const index = this.categories.findIndex((item) => item.id === id);
    if(index === -1){
      throw new Error("category not found");
    }
    const oldCategory = this.categories[index];
    const category = {
      ...oldCategory,
      ...changes,
    }
    this.categories[index] = category;
    return category;
  }
  delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if(index === -1){
      throw new Error("category not found");
    }
    this.categories.splice(index, 1);
    return {id}
  }
}

module.exports = CategoryService;
