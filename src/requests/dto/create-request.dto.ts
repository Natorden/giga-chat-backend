import { ApiProperty } from '@nestjs/swagger';

export class CreateRequestDto {
  @ApiProperty()
  senderId: string;
  @ApiProperty()
  receiverId: string;
}
