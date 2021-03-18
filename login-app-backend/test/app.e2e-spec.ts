import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import * as user from '../src/database/user.json';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('alive');
  });
});

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (GET)', () => {
    return request(app.getHttpServer()).get('/auth/login').expect(404);
  });

  it('/auth/login (POST) No body', () => {
    return request(app.getHttpServer()).post('/auth/login').expect(400);
  });

  it('/auth/login (POST) Only username', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'somevalue' })
      .expect(400);
  });

  it('/auth/login (POST) Only password', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ password: 'somevalue' })
      .expect(400);
  });

  it('/auth/login (POST) small password', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ password: 'som' })
      .expect(400);
  });

  it('/auth/login (POST) large password', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ password: '324678236427834624823764723' })
      .expect(400);
  });

  it('/auth/login (POST) invalid credentials', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'dksjfsjdf', password: 'somwewq' })
      .expect(401);
  });

  it('/auth/login (POST) correct credentials', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: user.username, password: user.passowrd })
      .expect(200);
  });
});
