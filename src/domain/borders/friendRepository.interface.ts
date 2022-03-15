import { Friend } from '../../core/friend';

export interface IFriendRepository {
  create(userOneId: string, userTwoId: string): Promise<Friend>;
  getFriendsByUserId(userId: string): Promise<Friend[]>;
  delete(friendEntityId: string): Promise<any>;
  getAll(): Promise<Friend[]>;
}
