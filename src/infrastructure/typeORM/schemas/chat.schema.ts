import { EntitySchema } from 'typeorm';
import { Chat } from '../../../core/chat.entity';

export const ChatSchema = new EntitySchema<Chat>({
  name: 'Chat',
  target: Chat,
  columns: {
    uuid: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    text: {
      type: 'varchar',
    },
  },
  relations: {
    room: {
      type: 'many-to-one',
      target: 'Room',
    },
  },
});
