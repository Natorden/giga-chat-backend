import { Room } from '../../core/room.entity';

export interface IRoomRepository {
  getAll(userUUID: string): Promise<Room[]>;
  getWithUUID(uuid: string): Promise<Room>;
  create(name: string, userUUID: string): Promise<Room>;
}
