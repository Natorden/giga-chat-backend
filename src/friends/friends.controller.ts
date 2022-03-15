import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { FriendsService } from '../domain/friends.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
import { RequestsService } from '../domain/requests.service';

@Controller('friends')
export class FriendsController {
  constructor(
    @Inject('FriendService') private readonly friendsService: FriendsService,
  ) {}

  @Get()
  findAll() {
    return this.friendsService.findAll();
  }
}