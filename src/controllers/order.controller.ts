import { Request, Response } from 'express';

import orderService from '../services/order.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const results = await orderService.getAllOrders();

  res.status(200).json(results);
};

export default { getAllOrders };