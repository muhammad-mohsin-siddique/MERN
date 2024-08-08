import http from 'http';
import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';


const port = 6969;
const app = express();
const server = http.createServer(app);

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    let userName;
    console.log('A new client is connected');

    ws.on('message', (data) => {
        const message = typeof data === 'string' ? data : data.toString();
        console.log(`Received message: ${message}`);

        if (message.startsWith("USERNAME:")) {
            userName = message.replace("USERNAME:", "").trim();
            // Notify everyone that this user has joined
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(`${userName} has joined the chat`);
                }
            });
        } else {
            // Broadcast all other messages
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(`${userName || "Anonymous"}: ${message}`);
                }
            });
        }



        // const message = typeof data === 'string' ? data : data.toString();

        // wss.clients.forEach((client)=>{

        //     if(client !== ws && client.readyState === WebSocket.OPEN){

        //         client.send(message);

        //     }
        // });
    });

    ws.on('error', (error) => {
        console.error(`WebSocket error: ${error}`);
    });

    ws.on('close', () => {
        console.log('A client disconnected');
        if (userName) {
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(`${userName} has left the chat`);
                }
            });
        }
    });

});

server.listen(port, () => {
    console.log(`Server is listening on ${port}! `);
})