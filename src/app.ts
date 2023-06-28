import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

const middlewares = [
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
];
app.use(middlewares);

/** Application routes */
app.use('/api/v1/', routes);

app.use(globalErrorHandler);

export default app;
