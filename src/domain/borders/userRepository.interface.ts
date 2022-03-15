import { User } from '../../core/user.entity';

export interface IUserRepository {
  create(name: string, email: string, password: string): Promise<User>;

  getUser(username: string, password: string): Promise<User>;

  getAllUsers(): Promise<User[]>;
}
