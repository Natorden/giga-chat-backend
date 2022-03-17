import { Room } from './room.entity';
import { User } from './user';

export class Chat {
  uuid: string;
  text: string;
  room: Room;
  user: User;
}
