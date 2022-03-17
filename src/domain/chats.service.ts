import { Inject, Injectable } from '@nestjs/common';
import { CreateChatDto } from '../chats/dto/create-chat.dto';
import { UpdateChatDto } from '../chats/dto/update-chat.dto';
import { IRoomRepository } from './borders/roomRepository.interface';
import { IChatRepository } from './borders/chatRepository.interface';

@Injectable()
export class ChatsService {
  private chatRepo: IChatRepository;

  constructor(@Inject('ChatRepository') chatRepository: IChatRepository) {
    this.chatRepo = chatRepository;
  }

  create(createChatDto: CreateChatDto) {
    return this.chatRepo.create(createChatDto);
  }

  findAll() {
    return `This action returns all chats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
