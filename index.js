const http = require("node:http");
const webSocketServer = require("websocket").server;
let connection = null;

const httpServer = http.createServer((req, res) => {
  console.log("We have received a request.");
});

const websocket = new webSocketServer({
  httpServer: httpServer,
});

websocket.on("request", request => {
  connection = request.accept(null, request.origin);
  connection.on("open", () => console.log("Opened!"));
  connection.on("close", () => console.log("Closed!"));
  connection.on("message", message => {
    console.log(`Received message ${message.utf8Data}`);
  });

  sendEvery5Seconds();
});

httpServer.listen(
  8080,
  () => console.log("My server is listening on port 8080."),
);

function sendEvery5Seconds() {
  connection.send(`Message ${Math.random()}`);
  setTimeout(sendEvery5Seconds, 5000);
}