import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/server";
import Route from "./router/userRoute";
import ChatRoute from "./router/chatRoute";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { createServer } from "node:http";
import "dotenv/config";
import { Server } from "socket.io";
// import { Chat } from "./schema/chatModel";
// import { verifyToken } from "./Middleware/authMiddleware";
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin:[ "http://localhost:5173", "https://muhammedfayistgl.github.io",'https://instagram-server-jyei.onrender.com/'],
        credentials: true,
    },
});

app.use(cors({ credentials: true, origin: ["http://localhost:5173", "https://muhammedfayistgl.github.io",'https://instagram-server-jyei.onrender.com/'] }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(verifyToken); //middleware

app.get("/", (req, res) => {
    res.send("Hello, TypeScript Express!");
});
io.on("connection", () => {
    console.log("New client connected");
    // socket.on("send-message", async (data) => {
    //     const { senderId, receiverId, content, roomId } = data;
    //     socket.join(roomId);
    //     const isChat = await Chat.aggregate([
    //         {
    //             $match: {
    //                 $and: [
    //                     {
    //                         senderId: {
    //                             $eq: senderId,
    //                         },
    //                     },
    //                     {
    //                         receiverId: {
    //                             $eq: receiverId,
    //                         },
    //                     },
    //                 ],
    //             },
    //         },
    //     ]);

    //     console.log(data);

    //     socket.to(isChat[0].roomId).emit("reply-message", content);
    // });
});
//  Routs
app.use("/v1", Route);
app.use("/v1", ChatRoute);
connectDB();

server.listen(1010, () => {
    console.log("Server started");
});
