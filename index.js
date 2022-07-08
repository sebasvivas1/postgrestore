const express = require('express');
const routerAPI = require('./routes');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

routerAPI(app);

app.listen(port, () => {
  console.log(`Server running on port ${port} 🚀`);
});
