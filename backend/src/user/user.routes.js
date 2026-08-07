import e from 'express';
import { createUser } from './user.controller.js';

const router = e.Router();

router.post('/', createUser);

export default router;
