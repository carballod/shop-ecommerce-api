import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
} from '@nestjs/websockets';
import { MessagesWsService } from './messages-ws.service';

@WebSocketGateway({ cors: true })
export class MessagesWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messagesWsService: MessagesWsService) {}
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }
  handleConnection(client: any) {
    throw new Error('Method not implemented.');
  }
}
