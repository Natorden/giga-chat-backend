import { Chat } from '../../core/chat.entity';

export interface IChatRepository {
  getAll(): Promise<Chat[]>;
}
