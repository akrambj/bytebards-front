import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  upgrade: false,
  transports: ["websocket"],
  reconnection: false,
  reconnectionAttempts: 1,
  reconnectionDelay: 1000,
});

export default socket;
