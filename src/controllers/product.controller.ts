import { Request, Response } from 'express';

import productsService from '../services';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;

  const newProduct = await productsService.createProduct(product);

  res.status(201).json(newProduct);
};

export default { createProduct };