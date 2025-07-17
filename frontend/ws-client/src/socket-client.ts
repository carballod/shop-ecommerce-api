import { Manager, Socket } from 'socket.io-client';

export const connectToServer = () => {
  const manager = new Manager('http://localhost:3000/socket.io/socket.io.js');

  const socket = manager.socket('/');

  addListeners(socket);
};

const addListeners = (socket: Socket) => {
  const serverStatusLabel =
    document.querySelector<HTMLSpanElement>('#server-status')!;

  // Todo: #clients-ul
  socket.on('connect', () => {
    serverStatusLabel.innerText = 'connected';
  });

  socket.on('disconnect', () => {
    serverStatusLabel.innerText = 'disconnected';
  });
};
