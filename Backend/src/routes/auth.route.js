import { Router } from 'express';
import { validateRegistationUser } from "../validator/auth.validator.js";
import { registerUser } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', validateRegistationUser, registerUser)





export default router;