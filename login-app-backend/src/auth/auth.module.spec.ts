import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from './auth.module';

describe('AuthModule', () => {
  let module: AuthModule;

  beforeEach(async () => {
    module = new AuthModule();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
