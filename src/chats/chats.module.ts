import { Module } from '@nestjs/common';
import { ChatsService } from '../domain/chats.service';
import { ChatsGateway } from './chats.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatSchema } from '../infrastructure/typeORM/schemas/chat.schema';
import { RoomsService } from '../domain/rooms.service';
import { RoomRepositoryAdapter } from '../infrastructure/typeORM/adapters/roomRepository.adapter';
import { ChatRepositoryAdapter } from '../infrastructure/typeORM/adapters/chatRepository.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([ChatSchema])],
  providers: [
    ChatsGateway,
    ChatsService,
    { provide: 'ChatRepository', useClass: ChatRepositoryAdapter },
  ],
})
export class ChatsModule {}
