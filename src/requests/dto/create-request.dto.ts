import { ApiProperty } from '@nestjs/swagger';

export class CreateRequestDto {
  @ApiProperty()
  senderUserId: number;
  @ApiProperty()
  receiverUserId: number;
}
