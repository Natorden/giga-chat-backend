import { IRoomRepository } from '../../../domain/borders/roomRepository.interface';
import { Injectable } from '@nestjs/common';
import { Room } from '../../../core/room.entity';
import { EntityManager, Repository } from 'typeorm';
import { RoomSchema } from '../schemas/room.schema';
import { Chat } from '../../../core/chat.entity';
import { ChatSchema } from '../schemas/chat.schema';
import { IChatRepository } from '../../../domain/borders/chatRepository.interface';
import { CreateChatDto } from '../../../chats/dto/create-chat.dto';
import { User } from '../../../core/user';
import { UserSchema } from '../schemas/user.schema';

@Injectable()
export class ChatRepositoryAdapter implements IChatRepository {
  private chatRepo: Repository<Chat>;
  private userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.chatRepo = em.getRepository(ChatSchema);
    this.userRepo = em.getRepository(UserSchema);
  }

  getAll(): Promise<Chat[]> {
    return this.chatRepo.find();
  }

  create(createChatDto: CreateChatDto): Promise<Chat> {
    return this.userRepo.findOne(createChatDto.userUUID).then((user) => {
      return this.chatRepo.save({
        text: createChatDto.text,
        room: { uuid: createChatDto.room },
        user: user,
      });
    });
  }
}
