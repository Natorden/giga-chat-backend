import { Injectable } from '@nestjs/common';
import { IRequestRepository } from '../../../domain/borders/requestRepository.interface';
import { EntityManager, Repository } from 'typeorm';
import { RequestSchema } from '../schemas/request.schema';
import { RequestEntity } from '../../../core/request.entity';

@Injectable()
export class RequestRepositoryAdapter implements IRequestRepository {
  private requestRepo: Repository<RequestEntity>;

  constructor(private readonly em: EntityManager) {
    this.requestRepo = em.getRepository(RequestSchema);
  }

  create(senderId: number, receiverId: number): Promise<RequestEntity> {
    return this.requestRepo.save({
      receiverUserId: receiverId,
      senderUserId: senderId,
    });
  }

  delete(id: string): Promise<any> {
    return this.requestRepo.delete({ uuid: id });
  }

  getById(id: string): Promise<RequestEntity> {
    return this.requestRepo.findOne({ uuid: id });
  }

  getBySenderId(senderId: number): Promise<RequestEntity[]> {
    return this.requestRepo.find({ senderUserId: senderId });
  }
}
