import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import {config} from "./config/config.js";
import authRoutes from "./routes/auth.route.js";
import morgan from "morgan";

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


app.get('/', (req, res) => {
 res. status(200).json({ message: 'Welcome to the Outfitly API' });
})

app.use("/api/auth", authRoutes);


export default app;