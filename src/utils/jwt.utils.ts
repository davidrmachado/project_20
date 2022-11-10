import jwtwebtoken from 'jsonwebtoken';

import { IUser } from '../interfaces/user.interface';

const createToken = (user: IUser) => {
  const { password, ...userInfo } = user;

  const token = jwtwebtoken.sign({ userInfo }, process.env.JWT_SECRET as string, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return token;
};

export default { createToken };