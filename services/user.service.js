const faker = require('faker');
const pool = require('../libs/postgres.pool');

class UserService {
  constructor() {
    this.users = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }
  generate() {
    const limitNumber = 100;
    for (let index = 0; index < limitNumber; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        image: faker.image.imageUrl(),
      });
    }
  }
  async find() {
    const query = 'SELECT * FROM tasks';
    const res = await this.pool.query(query);
    return res.rows;
  }
  findOne(id) {
    return this.users.find((item) => item.id === id);
  }
  create() {}
  update() {}
  delete() {}
}

module.exports = UserService;
