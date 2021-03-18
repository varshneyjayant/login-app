import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Auth {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @Length(6, 20)
  password: string;
}

export interface User {
  name: string;
  username: string;
}
