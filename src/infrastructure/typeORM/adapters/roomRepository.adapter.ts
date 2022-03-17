import { IRoomRepository } from '../../../domain/borders/roomRepository.interface';
import { Injectable } from '@nestjs/common';
import { Room } from '../../../core/room.entity';
import { EntityManager, Repository } from 'typeorm';
import { RoomSchema } from '../schemas/room.schema';
import { Chat } from '../../../core/chat.entity';

@Injectable()
export class RoomRepositoryAdapter implements IRoomRepository {
  private roomRepo: Repository<Room>;

  constructor(private readonly em: EntityManager) {
    this.roomRepo = em.getRepository(RoomSchema);
  }

  getAll(): Promise<Room[]> {
    return this.roomRepo.find();
  }

  getWithUUID(uuid: string): Promise<Room> {
    return this.roomRepo.findOne(uuid, {
      relations: ['chats', 'chats.user'],
    });
  }
}
