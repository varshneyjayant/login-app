import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { Auth } from './auth';
import * as user from '../database/user.json';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return null when no arugments are passed', () => {
    expect(service.validateLogin(<Auth>{})).toBeNull();
  });

  it('should return null when only username is passed', () => {
    const auth = <Auth>{
      username: 'someusername',
    };
    expect(service.validateLogin(auth)).toBeNull();
  });

  it('should return null when only password is passed', () => {
    const auth = <Auth>{
      password: 'password',
    };
    expect(service.validateLogin(auth)).toBeNull();
  });
  it('should return null when incorrect username and password are passed', () => {
    const auth = <Auth>{
      username: 'someusername',
      password: 'password',
    };
    expect(service.validateLogin(auth)).toBeNull();
  });

  it('should return a user when correct username and password are passed', () => {
    const auth = <Auth>{
      username: user.username,
      password: user.passowrd,
    };
    expect(service.validateLogin(auth)).toHaveProperty('name');
  });
});
