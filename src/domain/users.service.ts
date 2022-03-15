import { IUserRepository } from './borders/userRepository.interface';
import { User } from '../core/user';

export class UsersService {
  private userRepo: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepo = userRepository;
  }

  create(username: string, email: string, password: string): Promise<User> {
    return this.userRepo.create(username, email, password);
  }

  login(username: string, password: string): Promise<User> {
    return this.userRepo.getUser(username, password);
  }

  findAll(): Promise<User[]> {
    return this.userRepo.getAllUsers();
  }
}
