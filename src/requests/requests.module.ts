import { Module } from '@nestjs/common';
import { RequestsService } from '../domain/requests.service';
import { RequestsGateway } from './requests.gateway';
import { RequestsController } from './requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestSchema } from '../infrastructure/typeORM/schemas/request.schema';
import { RequestRepositoryAdapter } from '../infrastructure/typeORM/adapters/requestRepository.adapter';
import { IRequestRepository } from '../domain/borders/requestRepository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([RequestSchema])],
  providers: [
    {
      provide: 'RequestRepository',
      useClass: RequestRepositoryAdapter,
    },
    {
      inject: ['RequestRepository'],
      provide: 'RequestService',
      useFactory: (requestRepository: IRequestRepository) =>
        new RequestsService(requestRepository),
    },
    RequestsGateway,
  ],
  controllers: [RequestsController],
})
export class RequestsModule {}
