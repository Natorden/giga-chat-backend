import { IUserRepository } from '../../../domain/borders/userRepository.interface';
import { User } from '../../../core/user';
import { EntityManager, Repository } from 'typeorm';
import { UserSchema } from '../schemas/user.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryAdapter implements IUserRepository {
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepo = em.getRepository(UserSchema);
  }

  create(username: string, email: string, password: string): Promise<User> {
    return this.userRepo.save({
      username: username,
      email: email,
      password: password,
    });
  }

  getUser(username: string, password: string): Promise<User> {
    return this.userRepo.findOne({ username: username, password: password });
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepo.find();
  }
}
