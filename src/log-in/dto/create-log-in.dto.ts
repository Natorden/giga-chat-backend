import { ApiProperty } from '@nestjs/swagger';

export class CreateLogInDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
