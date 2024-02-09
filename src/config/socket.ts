import { io } from "socket.io-client";

const socketClient = io("http://localhost:1010", {
    withCredentials: true,
});

export default socketClient;
