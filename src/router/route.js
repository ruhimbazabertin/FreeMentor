
import express from 'express';
import userController from '../controller/userController';
import auth from '../middleware/auth';


const route = express.Router();

route.post('/api/v1/auth/signUp', userController.signUp);
route.post('/api/v1/auth/signIn', userController.signIn);
route.get('/api/v1/auth/mentors/:id', auth, userController.specificMentor);

export default route;
