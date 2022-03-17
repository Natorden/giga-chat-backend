import { Module } from '@nestjs/common';
import { UsersService } from '../domain/users.service';
import { UsersController } from './users.controller';
import { UserRepositoryAdapter } from '../infrastructure/typeORM/adapters/userRepository.adapter';
import { IUserRepository } from '../domain/borders/userRepository.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../infrastructure/typeORM/schemas/user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
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
  exports: ['UserService'],
})
export class UsersModule {}
