const express = require("express");
const app = express();
const PORT = 4000;

const http = require("http").Server(app);
const cors = require("cors");
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const clients = {};
const players = {};
let unmatched = null;

const addClient = (socket) => {
  clients[socket.id] = socket;
};
const removeClient = (socket) => {
  delete clients[socket.id];
};
const getOpponent = (socket) => {
  if (!players[socket.id].opponent) {
    return;
  }

  return players[players[socket.id].opponent].socket;
};
const joinGame = (socket) => {
  players[socket.id] = {
    opponent: unmatched,
    symbol: "X",
    socket: socket,
  };

  if (unmatched) {
    players[socket.id].symbol = "O";
    players[unmatched].opponent = socket.id;
    unmatched = null;
  } else {
    unmatched = socket.id;
  }
};

app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

socketIO.on("connection", function (socket) {
  console.log(`🚀 socketIO.on: ${socket.id} user just connected!`);
  let id = socket.id;

  addClient(socket);

  joinGame(socket);

  if (getOpponent(socket)) {
    socket.emit("game_begin", {
      symbol: players[socket.id].symbol,
    });

    getOpponent(socket).emit("game_begin", {
      symbol: players[getOpponent(socket).id].symbol,
    });
  }

  socket.on("make_move", function (data) {
    if (!getOpponent(socket)) {
      return;
    }

    socket.emit("move_made", data);
    getOpponent(socket).emit("move_made", data);

    return true;
  });

  socket.on("disconnect", function () {
    if (getOpponent(socket)) {
      getOpponent(socket).emit("opponent_left");
      removeClient(socket);
    }
  });

  socket.on("mouse_move", (data) => {
    data.id = id;
    socket.broadcast.emit("moving", data);
  });
});
