// Some typeorm can't find this entity when changing it to UserEntity
import { Chat } from './chat.entity';
import { Room } from './room.entity';

export class User {
  uuid: string;
  username: string;
  email: string;
  password: string;
  chats: Chat[];
  rooms: Room[];
}
