const express = require("express");
const app = express();
const socket = require("socket.io");

const server = app.listen(8080, () => {
  console.log("server is running on port 8080");
});

const io = socket(server);

io.on("connection", socket => {
  console.log(socket.id);
});
