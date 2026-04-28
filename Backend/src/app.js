import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import {config} from "./config/config.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
 res. status(200).json({ message: 'Welcome to the Outfitly API' });
})

app.use("/api/auth", authRoutes);


export default app;