import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { userService } from './user.service';

const createUser: RequestHandler = catchAsync(async (req, res, next) => {
  const { user } = req.body;

  const result = await userService.createUser(user);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    data: result,
    message: 'Successfully created user',
  });

  next();
});

export const UserController = {
  createUser,
};
