const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const Calculator = require('./internal_modules/calculator');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = 3000;
const calculator = new Calculator();
calculator.verboseMode = true;

const logMiddleware = function (req, res, next) {
    console.log("API recebeu alguma informação");
  
    next();
};


app.use(express.static('./site'));
app.use(logMiddleware);

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        try {
            result = calculator.resolveOperation(message.toString());
            ws.send(result);
        } catch (e) {
            ws.send(e.message);
        }
    });
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});