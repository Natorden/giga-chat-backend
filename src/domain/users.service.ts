import { IUserRepository } from './borders/userRepository.interface';
import { User } from '../core/user.entity';

export class UsersService {
  private userRepo: IUserRepository;

  constructor(userRpository: IUserRepository) {
    this.userRepo = userRpository;
  }

  create(username: string, email: string, password: string): Promise<User> {
    return this.userRepo.create(username, email, password);
  }

  login(username: string, password: string): Promise<User> {
    return this.userRepo.getUser(username, password);
  }
}
