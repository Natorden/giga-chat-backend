import { CacheModule, Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { MongoDbModule } from '../infrastructure/mongo/mongoDb.Module';
import { ProfileProvider } from '../infrastructure/mongo/profile.provider';
import { ProfileGateway } from './profile.gateway';

@Module({
  imports: [CacheModule.register(), MongoDbModule],
  controllers: [ProfilesController],
  providers: [ProfileGateway, ProfilesService, ...ProfileProvider],
})
export class ProfilesModule {}
