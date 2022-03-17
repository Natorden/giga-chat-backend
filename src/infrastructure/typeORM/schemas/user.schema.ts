import { EntitySchema } from 'typeorm';
import { User } from '../../../core/user';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    uuid: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    username: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    },
    password: {
      type: 'varchar',
    },
  },
  relations: {
    chats: {
      type: 'one-to-many',
      target: 'Chat',
      inverseSide: 'user',
    },
  },
});
