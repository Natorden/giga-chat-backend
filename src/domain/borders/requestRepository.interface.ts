import { RequestEntity } from '../../core/request.entity';

export interface IRequestRepository {
  create(senderId: string, receiverId: string): Promise<RequestEntity>;

  getBySenderId(senderId: string): Promise<RequestEntity[]>;

  getByReceiverId(receiverId: string): Promise<RequestEntity[]>;

  getById(id: string): Promise<RequestEntity>;

  delete(id: string): Promise<any>;
}
