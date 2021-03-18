import { Injectable } from '@nestjs/common';
import { Auth, User } from './auth';
import * as userdb from '../database/user.json';

@Injectable()
export class AuthService {
  validateLogin(auth: Auth): User | null {
    // simple auth
    if (
      auth &&
      auth.username === userdb.username &&
      auth.password === userdb.passowrd
    ) {
      return <User>{
        name: userdb.name,
        username: userdb.username,
      };
    }
    return null;
  }
}
