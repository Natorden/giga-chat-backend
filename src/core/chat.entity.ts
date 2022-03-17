import { Room } from './room.entity';
import { Entity } from 'typeorm';

export class Chat {
  uuid: string;
  text: string;
  room: Room;
}
