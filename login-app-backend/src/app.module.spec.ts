import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('AuthModule', () => {
  let module: AppModule;

  beforeEach(async () => {
    module = new AppModule();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
