import productModel from '../models';

import IProduct from '../interfaces';

const createProduct = (product: IProduct):
Promise<IProduct> => productModel.createProduct(product);

const listProducts = async () => productModel.listProducts();

export default { createProduct, listProducts };