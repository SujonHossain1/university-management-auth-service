import { Error } from 'mongoose';
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';

const handleValidationError = (
  err: Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    error => {
      return {
        path: error.path as string,
        message: error.message,
      };
    }
  );

  return {
    statusCode: 400,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleValidationError;
