import { EntitySchema } from 'typeorm';
import { Room } from '../../../core/room.entity';

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
  relations: {},
});
