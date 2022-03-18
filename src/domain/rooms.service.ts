import { Inject, Injectable } from '@nestjs/common';
import { CreateRoomDto } from '../rooms/dto/create-room.dto';
import { UpdateRoomDto } from '../rooms/dto/update-room.dto';
import { IFriendRepository } from './borders/friendRepository.interface';
import { IRoomRepository } from './borders/roomRepository.interface';

@Injectable()
export class RoomsService {
  private roomRepo: IRoomRepository;

  constructor(@Inject('RoomRepository') roomRepository: IRoomRepository) {
    this.roomRepo = roomRepository;
  }

  create(createRoomDto: CreateRoomDto) {
    return 'This action adds a new room';
  }

  findAll(userUUID: string) {
    return this.roomRepo.getAll(userUUID);
  }

  findOne(uuid: string) {
    return this.roomRepo.getWithUUID(uuid);
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
