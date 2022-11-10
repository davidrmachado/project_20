import express from 'express';

import userController from '../controllers/user.controller';

const routes = express.Router();

routes.post('/', userController.newUser);

export default routes;