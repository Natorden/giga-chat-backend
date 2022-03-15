import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../infrastructure/typeORM/schemas/user.schema';
import { UserRepositoryAdapter } from '../infrastructure/typeORM/adapters/userRepository.adapter';
import { IUserRepository } from '../domain/borders/userRepository.interface';
import { UsersService } from '../domain/users.service';
import { LogInController } from './log-in.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [LogInController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserRepositoryAdapter,
    },
    {
      inject: ['UserRepository'],
      provide: 'UserService',
      useFactory: (userRepository: IUserRepository) =>
        new UsersService(userRepository),
    },
  ],
})
export class LogInModule {}
