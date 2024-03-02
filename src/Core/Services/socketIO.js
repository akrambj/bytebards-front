import { io } from "socket.io-client";

const socket = io("https://436d-41-111-189-195.ngrok-free.app", {
  extraHeaders: {
    "ngrok-skip-browser-warning": true,
    "Access-Control-Allow-Origin": true,
  },
  autoConnect: false,
  upgrade: false,
  transports: ["websocket"],
  reconnection: false,
  reconnectionAttempts: 1,
  reconnectionDelay: 1000,
});

export default socket;
