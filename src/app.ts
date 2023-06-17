import cors from 'cors';
import express, { Application } from 'express';
import userRoutes from './app/modules/users/users.route';

const app: Application = express();

const middlewares = [
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
];

app.use(middlewares);

/** Application routes */
app.use('/api/v1/users', userRoutes);

export default app;
