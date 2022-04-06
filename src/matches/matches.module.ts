import { CacheModule, Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesGateway } from './matches.gateway';
import { MongoDbModule } from '../infrastructure/mongo/mongoDb.Module';
import { MatchProvider } from '../infrastructure/mongo/match.provider';

@Module({
  imports: [CacheModule.register(), MongoDbModule],
  providers: [MatchesGateway, MatchesService, ...MatchProvider],
})
export class MatchesModule {}
