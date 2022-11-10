import { Request, Response } from 'express';

import productService from '../services';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;

  const newProduct = await productService.createProduct(product);

  res.status(201).json(newProduct);
};

const listProducts = async (_req: Request, res: Response) => {
  const allProducts = await productService.listProducts();

  res.status(200).json(allProducts);
};

export default { createProduct, listProducts };