import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/server";
import  Route  from "./router/userRoute";
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import { createServer } from 'node:http';
import 'dotenv/config'
import { Server } from 'socket.io';
const app = express();
const server = createServer(app);
const io = new Server(server);


app.use(cors({ credentials: true ,origin:['http://localhost:5173','https://muhammedfayistgl.github.io']}));
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript Express!");
});
io.on('connection', (socket) => {
    console.log('a user connected');
  });
//  Routs
app.use("/v1", Route);
connectDB();

server.listen(1010, () => {
    console.log("Server started");
    
});
