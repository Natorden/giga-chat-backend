import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { MongoDbModule } from '../infrastructure/mongo/mongoDb.Module';
import { ProfileProvider } from '../infrastructure/mongo/profile.provider';

@Module({
  imports: [MongoDbModule],
  controllers: [ProfilesController],
  providers: [ProfilesService, ...ProfileProvider],
})
export class ProfilesModule {}
