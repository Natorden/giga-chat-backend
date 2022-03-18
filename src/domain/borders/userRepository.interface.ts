import { User } from '../../core/user';

export interface IUserRepository {
  create(name: string, email: string, password: string): Promise<User>;
  getUser(username: string, password: string): Promise<User>;
  getUsersByIds(ids: string[]): Promise<User[]>;
  getAllUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User>;
}
