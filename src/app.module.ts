import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsModule } from './chats/chats.module';
import { LogInModule } from './log-in/log-in.module';
import { RequestsModule } from './requests/requests.module';
import { FriendsModule } from './friends/friends.module';
import { RoomsModule } from './rooms/rooms.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './database/giga.db',
      autoLoadEntities: true,
      type: 'sqlite',
      synchronize: true,
    }),
    UsersModule,
    ChatsModule,
    LogInModule,
    RequestsModule,
    FriendsModule,
    RoomsModule,
    ProfilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
