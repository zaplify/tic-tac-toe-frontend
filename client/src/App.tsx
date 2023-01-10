import React from "react";
import { io } from "socket.io-client";
import "./App.scss";

const socket = io("http://localhost:4000");

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p>Magic chat app</p>
      </header>
    </div>
  );
}

export default App;
