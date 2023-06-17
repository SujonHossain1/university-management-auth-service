import { Request, Response } from 'express';
import usersServices from './users.service';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;

    const result = await usersServices.createUser(user);
    res.status(201).json({
      success: true,
      data: result,
      message: 'Successfully created user',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: 'Failed to create user',
    });
  }
};
