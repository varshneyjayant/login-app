import { IsNotEmpty, Length } from 'class-validator';

export class Auth {
  @IsNotEmpty()
  username: string;

  @Length(6, 20)
  password: string;
}

export interface User {
  name: string;
  username: string;
}
