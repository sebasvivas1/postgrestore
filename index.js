const express = require('express');
const routerAPI = require('./routes');
const app = express();
const {
  errorHandler,
  logErrors,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const port = process.env.PORT || 3000;

app.use(express.json());

routerAPI(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port} 🚀`);
});
