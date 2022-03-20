import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateLogInDto } from './dto/create-log-in.dto';
import { UsersService } from '../domain/users.service';
import { User } from '../core/user';

@Controller('log-in')
export class LogInController {
  constructor(
    @Inject('UserService') private readonly usersService: UsersService,
  ) {}

  @Post()
  login(@Body() createLogInDto: CreateLogInDto): Promise<User> {
    return this.usersService.login(
      createLogInDto.username,
      createLogInDto.password,
    );
  }
}
