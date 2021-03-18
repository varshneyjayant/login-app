import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth, User } from './auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  loginUser(@Body(new ValidationPipe()) auth: Auth): User {
    const user = this.authService.validateLogin(auth);
    if (user === null) {
      throw new HttpException('Authentication failed', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
