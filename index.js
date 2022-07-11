const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes');
const app = express();
const {
  errorHandler,
  logErrors,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const port = process.env.PORT || 3000;

app.use(express.json());
const whiteList = [
  'http://localhost:3000',
  'http://localhost:4000',
  'http://localhost:5000',
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));
routerAPI(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port} 🚀`);
});
