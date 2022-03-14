import { Injectable } from '@nestjs/common';
import { CreateLogInDto } from '../log-in/dto/create-log-in.dto';
import { UpdateLogInDto } from '../log-in/dto/update-log-in.dto';

@Injectable()
export class LogInService {
  findAll() {
    return `This action returns all logIn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logIn`;
  }
}
