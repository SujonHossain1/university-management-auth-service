import config from '../../../config';
import { IUser } from './users.interface';
import User from './users.model';
import { generateUserId } from './users.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  try {
    // generate user id
    const id = await generateUserId();
    user.id = id;

    // default password
    if (!user.password) {
      user.password = config.default_user_password as string;
    }

    return await User.create(user);
  } catch (err) {
    throw new Error('Failed to create user');
  }
};

export default {
  createUser,
};
