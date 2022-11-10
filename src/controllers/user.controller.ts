import { Request, Response } from 'express';

import userService from '../services/user.service';

import jwtwebtoken from '../utils/jwt.utils';

const newUser = async (req: Request, res: Response) => {
  const user = req.body;
  await userService.newUser(user);

  const token = await jwtwebtoken.createToken(user);
  res.status(201).json({ token });
};

export default { newUser };