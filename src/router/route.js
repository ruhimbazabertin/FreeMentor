
import express from 'express';
import userController from '../controller/userController';


const route = express.Router();

route.post('/api/v1/auth/signUp', userController.signUp);
route.post('/api/v1/auth/signIn', userController.signIn);

export default route;
