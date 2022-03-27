import { Module } from '@nestjs/common';
import { MongoDbProvider } from './mongoDb.provider';

@Module({
  providers: [...MongoDbProvider],
  exports: [...MongoDbProvider],
})
export class MongoDbModule {}
