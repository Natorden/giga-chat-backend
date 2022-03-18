import { Module } from '@nestjs/common';
import { FriendsService } from '../domain/friends.service';
import { FriendsController } from './friends.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendSchema } from '../infrastructure/typeORM/schemas/friend.schema';
import { FriendRepositoryAdapter } from '../infrastructure/typeORM/adapters/friendRepository.adapter';
import { IFriendRepository } from '../domain/borders/friendRepository.interface';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([FriendSchema]), UsersModule],
  providers: [
    {
      provide: 'FriendRepository',
      useClass: FriendRepositoryAdapter,
    },
    {
      inject: ['FriendRepository'],
      provide: 'FriendService',
      useFactory: (friendRepository: IFriendRepository) =>
        new FriendsService(friendRepository),
    },
  ],
  controllers: [FriendsController],
})
export class FriendsModule {}
