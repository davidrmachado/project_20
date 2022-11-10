import { ResultSetHeader } from 'mysql2';

import { IUser } from '../interfaces/user.interface';

import connection from './connection';

const newUser = async (user: IUser) => {
  const { username, classe, level, password } = user;

  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
};

export default { newUser };