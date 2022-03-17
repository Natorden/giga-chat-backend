import { IRoomRepository } from '../../../domain/borders/roomRepository.interface';
import { Injectable } from '@nestjs/common';
import { Room } from '../../../core/room.entity';
import { EntityManager, Repository } from 'typeorm';
import { RoomSchema } from '../schemas/room.schema';
import { Chat } from '../../../core/chat.entity';
import { ChatSchema } from '../schemas/chat.schema';
import { IChatRepository } from '../../../domain/borders/chatRepository.interface';

@Injectable()
export class ChatRepositoryAdapter implements IChatRepository {
  private ChatRepo: Repository<Chat>;

  constructor(private readonly em: EntityManager) {
    this.ChatRepo = em.getRepository(ChatSchema);
  }

  getAll(): Promise<Chat[]> {
    return this.ChatRepo.find();
  }
}
