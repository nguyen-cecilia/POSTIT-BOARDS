import express from 'express';
import http from 'http';
import {Server} from 'socket.io';

const app = express();
const port = 3001;

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173'
    }
});

io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected`);

    socket.on('signal', (data) => {
        console.log('action received', data);
        io.to(data.id).emit('signal', data);
    });
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
