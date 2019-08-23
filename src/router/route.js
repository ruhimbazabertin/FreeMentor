
import express from 'express';
import userController from '../controller/userController';


const route = express.Router();

route.post('/api/v1/auth/signUp', userController.signUp);

export default route;
