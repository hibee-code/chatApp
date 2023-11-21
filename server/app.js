import express from "express";
import dotenv from "dotenv"
import { Server } from "socket.io";
import http from 'http';
import cors from 'cors'

const app = express();
const server = http.createServer(app); // app serves as the req and res handler
dotenv.config();

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnection', () => {
        console.log('user disconnect');
    });
})

app.get("/", (req,res) => {
    res.send("Hello world")
})

const Port = process.env.PORT;

server.listen(Port, () => {
    console.log(`server running on ${Port}`);
});