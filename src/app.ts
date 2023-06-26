import cors from 'cors';
import express, { Application } from 'express';
import { UserRoutes } from './app/modules/users/user.route';
import globalErrorHandler from './middlewares/globalErrorHandler';

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
