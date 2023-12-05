import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/server";
import  Route  from "./router/userRoute";
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import 'dotenv/config'
const app = express();


app.use(cors({ credentials: true ,origin:'http://localhost:5173'}));
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript Express!");
});

//  Routs
app.use("/v1", Route);
connectDB();

app.listen(1010, () => {
    console.log("Server started");
});
