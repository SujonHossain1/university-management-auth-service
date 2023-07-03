import cors from 'cors';
import express, { Application } from 'express';
import httpStatus from 'http-status';
import morgan from 'morgan';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

const middlewares = [
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
  morgan('dev'),
];
app.use(middlewares);

/** Application routes */
app.use('/api/v1/', routes);

// handle global errors
app.use(globalErrorHandler);

// handle not found route
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route not found',
    errorMessages: [{ path: req.originalUrl, message: 'Route not found' }],
  });
  next();
});

export default app;
