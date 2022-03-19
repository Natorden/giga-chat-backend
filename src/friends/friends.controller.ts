import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { FriendsService } from '../domain/friends.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
import { RequestsService } from '../domain/requests.service';
import { CreateRequestDto } from '../requests/dto/create-request.dto';
import { Friend } from '../core/friend';

import { User } from '../core/user';
import { UsersService } from '../domain/users.service';

@Controller('friends')
export class FriendsController {
  constructor(
    @Inject('FriendService') private readonly friendsService: FriendsService,
    @Inject('UserService') private readonly userService: UsersService,
  ) {}

  @Get()
  findAll() {
    return this.friendsService.findAll();
  }

  @Get('user/:uuid')
  findByUserId(@Param('uuid') uuid: string): Promise<User[]> | any {
    const friendIds: string[] = [];

    return this.friendsService.findByUserId(uuid).then((friends) => {
      for (const friend of friends) {
        // Add the opposite user uuid to the friendsIds list
        switch (uuid) {
          case friend.userOneId: {
            friendIds.push(friend.userTwoId);
            break;
          }
          case friend.userTwoId: {
            friendIds.push(friend.userOneId);
            break;
          }
        }
      }

      return this.userService.findByIds(friendIds);
    });
  }

  @Post()
  create(@Body() createFriendDto: CreateFriendDto) {
    return this.friendsService.create(createFriendDto);
  }
}
