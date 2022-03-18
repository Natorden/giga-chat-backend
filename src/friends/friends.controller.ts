import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { FriendsService } from '../domain/friends.service';
import { CreateFriendDto } from './dto/create-friend.dto';
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

  @Post()
  create(@Body() createFriendDto: CreateFriendDto) {
    return this.friendsService.create(createFriendDto);
  }

  @Get('user/:uuid')
  findAllFriends(@Param('uuid') uuid: string) {
    const userIdArr = [] as string[];
    return this.friendsService.findByUserId(uuid).then((friends) => {
      for (const friend of friends) {
        switch (uuid) {
          case friend.userOneId: {
            userIdArr.push(friend.userTwoId);
            break;
          }
          case friend.userTwoId: {
            userIdArr.push(friend.userOneId);
            break;
          }
        }
      }

      return this.userService.findByIds(userIdArr);
    });
  }
}
