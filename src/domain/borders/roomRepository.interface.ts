import { Room } from '../../core/room.entity';

export interface IRoomRepository {
  getAll(userUUID: string): Promise<Room[]>;
  getWithUUID(uuid: string): Promise<Room>;
}
