import { Injectable } from '@nestjs/common';

@Injectable()
export class LogInService {
  findAll() {
    return `This action returns all logIn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logIn`;
  }
}
