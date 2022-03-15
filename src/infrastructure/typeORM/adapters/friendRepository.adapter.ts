import { Injectable } from '@nestjs/common';
import { IFriendRepository } from '../../../domain/borders/friendRepository.interface';
import { Friend } from '../../../core/friend';
import { EntityManager, Repository } from 'typeorm';
import { FriendSchema } from '../schemas/friend.schema';

@Injectable()
export class FriendRepositoryAdapter implements IFriendRepository {
  private friendRepo: Repository<Friend>;

  constructor(private readonly em: EntityManager) {
    this.friendRepo = em.getRepository(FriendSchema);
  }

  create(userOneId: string, userTwoId: string): Promise<Friend> {
    return this.friendRepo.save({
      userOneId: userOneId,
      userTwoId: userTwoId,
    });
  }

  delete(friendEntityId: string): Promise<any> {
    return this.friendRepo.delete({ uuid: friendEntityId });
  }

  getFriendsByUserId(userId: string): Promise<Friend[]> {
    // Todo: this might not work D:
    // Select friend where the first or second user id is equal to userId
    return this.friendRepo
      .createQueryBuilder('friend')
      .select('friend')
      .where('friend.userOneId = :oneId', { userId })
      .orWhere('friend.userTwoId = :twoId', { userId })
      .getMany();
  }

  getAll(): Promise<Friend[]> {
    return this.friendRepo.find();
  }
}