import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { RequestsService } from '../domain/requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Inject } from '@nestjs/common';
import { Server } from 'socket.io';
import { UsersService } from '../domain/users.service';
import { User } from '../core/user';

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
      senderId: createRequestDto.senderId,
      receiverId: createRequestDto.receiverId,
    };

    this.requestService
      .create(newRequest.senderId, newRequest.receiverId)
      .then((r) => this.server.emit(newRequest.receiverId, r.senderUserId));
  }

  @SubscribeMessage('removeRequest')
  remove(@MessageBody() id: string) {
    return this.requestService.declineRequest(id);
  }
}
