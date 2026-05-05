import { Router } from 'express';
import { validateRegistationUser, validateLoginUser } from "../validator/auth.validator.js";
import { registerUser, loginUser, googleCallback } from '../controllers/auth.controller.js';
import passport from "passport";

const router = Router();

router.post('/register', validateRegistationUser, registerUser)

router.post('/login', validateLoginUser, loginUser)

router.get("/google",
    passport.authenticate("google", { scope: [ "profile", "email" ] }))

router.get('/google/callback', passport.authenticate('google', {session:false}), googleCallback)



export default router;