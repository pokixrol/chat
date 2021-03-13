const express = require("express");
const socket = require("socket.io");
const path = require("path");
const http = require("http");
const timeInfo = require('./modules.js');

console.log(timeInfo());

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "public")));

const io = socket(server);

io.on("connection", (socket) => {
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});

const PORT = 4000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
