import { Chat } from './chat.entity';
import { User } from './user';

export class Room {
  uuid: string;
  name: string;
  chats: Chat[];
  user: User;
}
