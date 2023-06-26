import { RequestHandler } from 'express';
import { userService } from './user.service';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;

    const result = await userService.createUser(user);
    res.status(201).json({
      success: true,
      data: result,
      message: 'Successfully created user',
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
