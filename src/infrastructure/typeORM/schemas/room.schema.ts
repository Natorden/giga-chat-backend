import { EntitySchema } from 'typeorm';
import { Room } from '../../../core/room.entity';
import { Chat } from '../../../core/chat.entity';

export const RoomSchema = new EntitySchema<Room>({
  name: 'Room',
  target: Room,
  columns: {
    uuid: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: 'varchar',
    },
  },
  relations: {
    chats: {
      type: 'one-to-many',
      target: 'Chat',
      inverseSide: 'room',
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      joinColumn: true,
    },
  },
});
