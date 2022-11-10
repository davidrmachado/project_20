import express from 'express';

import productController from '../controllers';

const routes = express.Router();

routes.post('/', productController.createProduct);

export default routes;