import { Module } from '@nestjs/common';
import { RoomsService } from '../domain/rooms.service';
import { RoomsController } from './rooms.controller';
import { RoomRepositoryAdapter } from '../infrastructure/typeORM/adapters/roomRepository.adapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomSchema } from '../infrastructure/typeORM/schemas/room.schema';

@Module({
  controllers: [RoomsController],
  imports: [TypeOrmModule.forFeature([RoomSchema])],
  providers: [
    RoomsService,
    { provide: 'RoomRepository', useClass: RoomRepositoryAdapter },
  ],
})
export class RoomsModule {}
