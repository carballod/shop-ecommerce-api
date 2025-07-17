import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesWsService } from './messages-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from 'src/messages-ws/dtos/new-message.dto';

@WebSocketGateway({ cors: true })
export class MessagesWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() webSocketServer: Server;

  constructor(private readonly messagesWsService: MessagesWsService) {}
  handleConnection(client: Socket) {
    this.messagesWsService.registerClient(client);

    this.webSocketServer.emit(
      'clients-updated',
      this.messagesWsService.getConnectedClients(),
    );
  }

  handleDisconnect(client: Socket) {
    this.messagesWsService.removeClient(client.id);

    this.webSocketServer.emit(
      'clients-updated',
      this.messagesWsService.getConnectedClients(),
    );
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket, payload: NewMessageDto) {
    //! Emite unicamente al cliente
    // client.emit('message-from-server', {
    //   fullName: 'yo',
    //   message: payload.message || 'no message',
    // });
    //! Emite a todos MENOS al cliente inicial
    // client.broadcast.emit('message-from-server', {
    //   fullName: 'yo',
    //   message: payload.message || 'no message',
    // });

    this.webSocketServer.emit('message-from-server', {
      fullName: 'Yo!',
      message: payload.message || 'no message',
    });
  }
}
