/* eslint-disable no-console */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import handleValidationError from '../../errors/handleValidationError';
import handleZodError from '../../errors/handleZodError';
import { IGenericErrorMessage } from '../../interfaces/error';
import { errorLogger } from '../../shared/logger';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (config.env === 'development') {
    console.log(error);
  } else {
    errorLogger.error(error);
  }

  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidationError') {
    const errors = handleValidationError(error);
    statusCode = errors.statusCode;
    message = errors.message;
    errorMessages = errors.errorMessages;
  } else if (error instanceof ZodError) {
    const errors = handleZodError(error);
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
    message: message,
    errorMessages,
    stack: config.env === 'production' ? null : error.stack,
  });

  next();
};

export default globalErrorHandler;
