import express from 'express';

import orderController from '../controllers/order.controller';

const routes = express.Router();

routes.get('/', orderController.getAllOrders);

export default routes;