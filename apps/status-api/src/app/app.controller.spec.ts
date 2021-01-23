import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  const mockAppService = ({
    getData: () => {
      return { message: 'Welcome to status-api!' };
    },
    getHardcodedStmData: () => {
      return { message: 'hardcoded stm data' };
    },
  } as AppService) as any;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: mockAppService }],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to status-api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to status-api!',
      });
    });
  });

  describe('get raw STM data', () => {
    it('should get the raw STM data from the app service', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getRawData()).toEqual({
        message: 'hardcoded stm data',
      });
    });
  });
});
