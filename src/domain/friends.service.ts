import { Injectable } from '@nestjs/common';
import { CreateFriendDto } from '../friends/dto/create-friend.dto';
import { UpdateFriendDto } from '../friends/dto/update-friend.dto';
import { IUserRepository } from './borders/userRepository.interface';
import { IFriendRepository } from './borders/friendRepository.interface';

export class FriendsService {
  private friendRepo: IFriendRepository;

  constructor(friendRepository: IFriendRepository) {
    this.friendRepo = friendRepository;
  }

  create(createFriendDto: CreateFriendDto) {
    return this.friendRepo.create(
      createFriendDto.userOneId,
      createFriendDto.userTwoId,
    );
  }

  findAll() {
    return this.friendRepo.getAll();
  }

  findByUserId(id: string) {
    return this.friendRepo.getFriendsByUserId(id);
  }

  remove(id: string) {
    return this.friendRepo.delete(id);
  }
}
