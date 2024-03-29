import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from './connection';

import IProduct from '../interfaces';

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return { 
    id: insertId, 
    ...product };
};

const listProducts = async (): Promise<IProduct[]> => {
  const [result] = await connection.execute<IProduct[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Products',
  );

  return result;
};

export default { createProduct, listProducts };