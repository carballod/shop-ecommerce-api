import { connectToServer } from './socket-client';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>
    <span id="server-status">offline</span>

    <ul id="clients-ul">
      <li>Open the console to see the logs</li>
      <li>Check the server status above</li>
      <li>Ensure the server is running on port 3000</li>
    </ul>
  </div>
`;

connectToServer();
