import { Router } from 'express';
import { validateRegistationUser, validateLoginUser } from "../validator/auth.validator.js";
import { registerUser, loginUser } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', validateRegistationUser, registerUser)

router.post('/login', validateLoginUser, loginUser)





export default router;