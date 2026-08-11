import e from 'express';
import userController from './user.controller.js';
import middleware from '../middleware/middleware.js';

const router = e.Router();

router.post('/', userController.createUser);
router.get('/', middleware.authToken, userController.readUsers);

export default router;
