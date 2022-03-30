import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ProfilesService } from './profiles.service';
import { UserMatchDto } from '../matches/dto/user.match.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ProfileGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly profileService: ProfilesService) {}

  @SubscribeMessage('matches')
  userProfileMach(userMatch: UserMatchDto) {
    this.profileService.addUserMatch(userMatch);
  }
}
