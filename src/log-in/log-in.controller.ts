import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CreateLogInDto } from './dto/create-log-in.dto';
import { UsersService } from '../domain/users.service';

@Controller('log-in')
export class LogInController {
  constructor(
    @Inject('UserService') private readonly usersService: UsersService,
  ) {}
  @Post()
  login(@Body() createLogInDto: CreateLogInDto) {
    return this.usersService.login(
      createLogInDto.username,
      createLogInDto.password,
    );
  }
}
