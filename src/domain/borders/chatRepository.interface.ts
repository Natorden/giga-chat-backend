import { Chat } from '../../core/chat.entity';
import { CreateChatDto } from '../../chats/dto/create-chat.dto';

export interface IChatRepository {
  getAll(): Promise<Chat[]>;

  create(createChatDto: CreateChatDto): Promise<Chat>;
}
