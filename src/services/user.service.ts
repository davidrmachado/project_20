import { IUser } from '../interfaces/user.interface';

import userModel from '../models/user.model';

const newUser = async (user: IUser) => {
  await userModel.newUser(user);
};

export default { newUser };