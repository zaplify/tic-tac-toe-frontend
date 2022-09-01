// game_begin
import { Socket } from "socket.io-client";

export type GameBegin = {
  symbol: PlayerSymbol;
};
export type PlayerSymbol = string;

export type Move = {
  symbol: PlayerSymbol;
  position: string; // e.g. 'A1' | 'B2' | 'C3'
};

// make_move
export type MakeMove = Move;

// move_made
export type MoveMade = Move;

// disconnect
export type Disconnect = void;

// connection
export type Connect = Socket;
