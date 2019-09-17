
import express from 'express';
import userController from '../controller/userController';
import mentorController from '../controller/mentorController';
import sessionController from '../controller/sessionController';
import auth from '../middleware/auth';


const route = express.Router();

route.post('/api/v1/auth/signUp', userController.signUp);
route.post('/api/v1/auth/signIn', userController.signIn);
route.get('/api/v1/auth/mentors/:id', auth, mentorController.specificMentor);
route.patch('/api/v1/auth/user/:id', auth, userController.changeToMentor);
route.get('/api/v1/auth/mentors', auth, mentorController.viewMentors);
route.post('/api/v1/auth/sessions', auth, sessionController.createSession);
route.patch('/api/v1/auth/sessions/:sessionId/accept', auth, sessionController.acceptSession);
route.patch('/api/v1/auth/sessions/:sessionId/reject', auth, sessionController.declineSession);

export default route;
