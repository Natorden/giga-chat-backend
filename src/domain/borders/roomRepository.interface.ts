import { Room } from '../../core/room.entity';

export interface IRoomRepository {
  getAll(): Promise<Room[]>;
  getWithUUID(uuid: string): Promise<Room>;
}
