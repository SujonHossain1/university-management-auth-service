import { ErrorRequestHandler } from 'express';
import config from '../config';
import ApiError from '../errors/ApiError';
import handleValidationError from '../errors/handleValidationError';
import { IGenericErrorMessage } from '../interfaces/error';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidationError') {
    const errors = handleValidationError(error);
    statusCode = errors.statusCode;
    message = errors.message;
    errorMessages = errors.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;

    errorMessages = error.message
      ? [{ path: 'general', message: error.message }]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message: error.message || message,
    errorMessages,
    stack: config.env === 'production' ? null : error.stack,
  });

  next();
};

export default globalErrorHandler;
