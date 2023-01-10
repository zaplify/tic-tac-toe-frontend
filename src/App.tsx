import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.scss";

const connectToChatServer = () => {
    const socket = io("https://http-nodejs-production-85eb.up.railway.app");

    socket.onAny((type, message) => {
        console.log(`### event: ${JSON.stringify(type, message)}`);
    })

    return socket;
}
function App() {
    // connectToChatServer();

    return (
        <div className="app">
            <header className="app-header">
                <p>Magic chat app</p>
            </header>
        </div>
    );
}

export default App;

