import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

const middlewares = [
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
];
app.use(middlewares);

/** Application routes */
app.use('/api/v1/users', UserRoutes);

app.use(globalErrorHandler);

export default app;
