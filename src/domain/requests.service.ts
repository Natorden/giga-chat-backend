import { Injectable } from '@nestjs/common';
import { IRequestRepository } from './borders/requestRepository.interface';
import { RequestEntity } from '../core/request.entity';

@Injectable()
export class RequestsService {
  private requestRepo: IRequestRepository;

  constructor(requestRepository: IRequestRepository) {
    this.requestRepo = requestRepository;
  }

  create(senderId: string, receiverId: string): Promise<RequestEntity> {
    return this.requestRepo.create(senderId, receiverId);
  }

  findBySenderId(userId: string): Promise<RequestEntity[]> {
    return this.requestRepo.getBySenderId(userId);
  }

  findByReceiverId(userId: string): Promise<RequestEntity[]> {
    return this.requestRepo.getByReceiverId(userId);
  }
}
