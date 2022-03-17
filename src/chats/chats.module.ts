import { Module } from '@nestjs/common';
import { ChatsService } from '../domain/chats.service';
import { ChatsGateway } from './chats.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatSchema } from '../infrastructure/typeORM/schemas/chat.schema';

@Module({
  imports: [TypeOrmModule.forFeature([ChatSchema])],
  providers: [ChatsGateway, ChatsService],
})
export class ChatsModule {}
