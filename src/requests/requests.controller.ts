import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { RequestsService } from '../domain/requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { RequestEntity } from '../core/request.entity';

@Controller('requests')
export class RequestsController {
  constructor(
    @Inject('RequestService') private readonly requestService: RequestsService,
  ) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    // Used for testing purposes
    return this.requestService.create(
      createRequestDto.senderUserId,
      createRequestDto.receiverUserId,
    );
  }

  @Get(':id')
  findById(@Param('id') userId: string): Promise<RequestEntity[]> {
    return this.requestService.findByReceiverId(userId);
  }
}
