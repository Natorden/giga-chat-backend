import { ApiProperty } from '@nestjs/swagger';

export class CreateRequestDto {
  @ApiProperty()
  senderUserId: string;
  @ApiProperty()
  receiverUserId: string;
}
