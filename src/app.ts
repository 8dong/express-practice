import * as express from 'express';

import catsRouter from './cats/cats.route';

const app: express.Express = express();

// logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('logging middleware');
  next();
});

// json middleware
app.use(express.json());

app.use(catsRouter);

// 404 middleware
app.use((req, res, next) => {
  console.log('error middleware');
  res.send({ error: '404 is not found' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
