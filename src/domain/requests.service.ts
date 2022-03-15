import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from '../requests/dto/create-request.dto';
import { UpdateRequestDto } from '../requests/dto/update-request.dto';
import { IRequestRepository } from './borders/requestRepository.interface';

@Injectable()
export class RequestsService {
  private requestRepo: IRequestRepository;

  constructor(requestRepository: IRequestRepository) {
    this.requestRepo = requestRepository;
  }

  create(senderId: number, receiverId: number) {
    return this.requestRepo.create(senderId, receiverId);
  }

  find(userId: number) {
    return this.requestRepo.getBySenderId(userId);
  }

  acceptRequest(id: string) {
    // TODO: Add a friend schemas to save one-to-one user relations
  }

  declineRequest(id: string) {
    return this.requestRepo.delete(id);
  }
}
