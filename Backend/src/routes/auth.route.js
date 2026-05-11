import { Router } from 'express';
import { validateRegistationUser, validateLoginUser } from "../validator/auth.validator.js";
import { getMe, registerUser, loginUser, googleCallback } from '../controllers/auth.controller.js';
import passport from "passport";
import { authenticateUser } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/register', validateRegistationUser, registerUser)

router.post('/login', validateLoginUser, loginUser)

router.get("/google",
    passport.authenticate("google", { scope: [ "profile", "email" ] }))

router.get('/google/callback', passport.authenticate('google', {session:false, failureRedirect:"http://localhost:5173/login"}), googleCallback,
)


router.get('/me', authenticateUser, getMe)

export default router;