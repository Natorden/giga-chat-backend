import { EntitySchema } from 'typeorm';
import { User } from '../../../core/user';
import { RequestEntity } from '../../../core/request.entity';

export const RequestSchema = new EntitySchema<RequestEntity>({
  name: 'RequestEntity',
  target: RequestEntity,
  columns: {
    uuid: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    senderUserId: {
      type: 'int',
    },
    receiverUserId: {
      type: 'int',
    },
  },
  relations: {},
});
