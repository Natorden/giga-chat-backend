import { Chat } from './chat.entity';

export class Room {
  uuid: string;
  name: string;
  chats: Chat[];
}
