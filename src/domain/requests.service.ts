import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from '../requests/dto/create-request.dto';
import { UpdateRequestDto } from '../requests/dto/update-request.dto';
import { IRequestRepository } from './borders/requestRepository.interface';
import { User } from '../core/user';
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

  acceptRequest(id: string) {
    // TODO: Add a friend schemas to save one-to-one user relations
  }

  declineRequest(id: string) {
    return this.requestRepo.delete(id);
  }
}
