import { Injectable } from '@nestjs/common';
import { IFriendRepository } from '../../../domain/borders/friendRepository.interface';
import { Friend } from '../../../core/friend';
import { EntityManager, Repository } from 'typeorm';
import { FriendSchema } from '../schemas/friend.schema';
import { UserSchema } from '../schemas/user.schema';
import { User } from '../../../core/user';

@Injectable()
export class FriendRepositoryAdapter implements IFriendRepository {
  private friendRepo: Repository<Friend>;
  private userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.friendRepo = em.getRepository(FriendSchema);
    this.userRepo = em.getRepository(UserSchema);
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
    // Select friend where the first or second user id is equal to userId
    return this.friendRepo.find({
      where: [{ userOneId: userId }, { userTwoId: userId }],
    });
  }

  getAll(): Promise<Friend[]> {
    return this.friendRepo.find();
  }
}
