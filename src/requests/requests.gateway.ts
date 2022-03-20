import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { RequestsService } from '../domain/requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { Inject } from '@nestjs/common';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
@WebSocketGateway()
export class RequestsGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    @Inject('RequestService') private readonly requestService: RequestsService,
  ) {}

  @SubscribeMessage('createRequest')
  create(@MessageBody() createRequestDto: CreateRequestDto) {
    /*
     * Listens to requests ->
     * creates request in the database ->
     * sends the request to the receiver uuid
     */
    const newRequest: CreateRequestDto = {
      senderUserId: createRequestDto.senderUserId,
      receiverUserId: createRequestDto.receiverUserId,
    };

    this.requestService
      .create(newRequest.senderUserId, newRequest.receiverUserId)
      .then((r) => this.server.emit(newRequest.receiverUserId, r.senderUserId));
  }

  @SubscribeMessage('removeRequest')
  remove(@MessageBody() id: string) {
    return;
  }
}
