import express from 'express';

import productController from '../controllers';

const routes = express.Router();

routes.post('/', productController.createProduct);
routes.get('/', productController.listProducts);

export default routes;