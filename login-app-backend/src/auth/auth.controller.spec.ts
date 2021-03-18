import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Auth } from './auth';
import * as user from '../database/user.json';
import { HttpException } from '@nestjs/common';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should throw Unauthorized Error', () => {
    try {
      controller.loginUser(<Auth>{});
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
    }
  });

  it('should return a user when correct username and password are passed', () => {
    const auth = <Auth>{
      username: user.username,
      password: user.passowrd,
    };
    expect(controller.loginUser(auth)).toHaveProperty('name');
  });
});
