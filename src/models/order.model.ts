import { RowDataPacket } from 'mysql2';

import IOrder from '../interfaces/order.interface';

import connection from './connection';

const getAllOrders = async () => {
  const [results] = await connection.execute<IOrder[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Orders',
  );

  return results;
};

const getId = async (id: (number | undefined)) => {
  const [results] = await connection.execute<IOrder[] 
  & RowDataPacket[] >('SELECT id FROM Trybesmith.Products WHERE orderId = ?', [id]);

  return results.map((row) => row.id);
};

export default {
  getAllOrders,
  getId,
};