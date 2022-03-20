import { IRoomRepository } from '../../../domain/borders/roomRepository.interface';
import { Injectable } from '@nestjs/common';
import { Room } from '../../../core/room.entity';
import { EntityManager, Repository } from 'typeorm';
import { RoomSchema } from '../schemas/room.schema';
import { FriendSchema } from '../schemas/friend.schema';
import { Friend } from '../../../core/friend';

@Injectable()
export class RoomRepositoryAdapter implements IRoomRepository {
  private roomRepo: Repository<Room>;
  private friendRepo: Repository<Friend>;

  constructor(private readonly em: EntityManager) {
    this.roomRepo = em.getRepository(RoomSchema);
    this.friendRepo = em.getRepository(FriendSchema);
  }

  getAll(userUUID: string): Promise<Room[]> {
    return this.friendRepo
      .find({
        where: [{ userOneId: userUUID }, { userTwoId: userUUID }],
      })
      .then((friends) => {
        const whereArr = [];
        whereArr.push({ user: { uuid: userUUID } });
        for (const friend of friends) {
          if (friend.userOneId === userUUID) {
            whereArr.push({ user: { uuid: friend.userTwoId } });
          } else {
            whereArr.push({ user: { uuid: friend.userOneId } });
          }
        }

        return this.roomRepo.find({
          where: whereArr,
        });
      });
  }

  getWithUUID(uuid: string): Promise<Room> {
    return this.roomRepo.findOne(uuid, {
      relations: ['chats', 'chats.user'],
    });
  }

  create(name: string, userUUID: string): Promise<Room> {
    return this.roomRepo.save({
      name: name,
      user: { uuid: userUUID },
    });
  }
}
