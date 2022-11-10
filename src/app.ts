import express from 'express';

import errorMiddleware from './middlewares/error.middleware';

import productRoutes from './routers/product.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use(errorMiddleware);

export default app;
