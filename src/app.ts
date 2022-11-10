import express from 'express';

import errorMiddleware from './middlewares/error.middleware';

import productRoutes from './routers/product.routes';

import userRoutes from './routers/user.routes';

import orderRoutes from './routers/order.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use('/users', userRoutes);

app.use('/orders', orderRoutes);

app.use(errorMiddleware);

export default app;
