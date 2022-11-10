import productModel from '../models';

import IProduct from '../interfaces';

const createProduct = (product: IProduct):
Promise<IProduct> => productModel.createProduct(product);

export default { createProduct };