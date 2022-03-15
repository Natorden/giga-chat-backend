import { RequestEntity } from '../../core/request.entity';

export interface IRequestRepository {
  create(senderId: number, receiverId: number): Promise<RequestEntity>;
  getBySenderId(senderId: number): Promise<RequestEntity[]>;
  getById(id: string): Promise<RequestEntity>;
  delete(id: string): Promise<any>;
}
