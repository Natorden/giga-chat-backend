import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RequestsService } from '../domain/requests.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('requests')
export class RequestsController {
  constructor(
    @Inject('RequestService') private readonly requestService: RequestsService,
  ) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(
      createRequestDto.senderUserId,
      createRequestDto.receiverUserId,
    );
  }
}
