import { connectToServer } from './socket-client';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>
    <span id="server-status">offline</span>

    <ul id="clients-ul"></ul>

    <form id="message-form">
      <input type="text" id="message-input" placeholder="message" />
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
    
  </div>
`;

connectToServer();
