import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { RequestsService } from '../domain/requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Inject } from '@nestjs/common';

@WebSocketGateway()
export class RequestsGateway {
  constructor(
    @Inject('RequestService') private readonly requestService: RequestsService,
  ) {}

  @SubscribeMessage('createRequest')
  create(@MessageBody() createRequestDto: CreateRequestDto) {
    return this.requestService.create(
      createRequestDto.senderUserId,
      createRequestDto.receiverUserId,
    );
  }

  @SubscribeMessage('removeRequest')
  remove(@MessageBody() id: string) {
    return this.requestService.declineRequest(id);
  }
}
