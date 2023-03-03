import * as express from 'express';

import catsRouter from './cats/cats.route';

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log('logging middleware');
      next();
    });

    // json middleware
    this.app.use(express.json());

    // router middleware
    this.setRoute();

    // 404 middleware
    this.app.use((req, res, next) => {
      console.log('error middleware');
      res.send({ error: '404 is not found' });
    });
  }

  public listen() {
    this.setMiddleware();

    this.app.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
