import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import {config} from "./config/config.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js"
import morgan from "morgan";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    methods: [ "GET", "POST", "PUT", "DELETE" ],
    credentials: true
}))

app.use(passport.initialize());

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}))

app.get('/', (req, res) => {
 res. status(200).json({ message: 'Welcome to the Outfitly API' });
})

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

export default app;