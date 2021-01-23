import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { StmService } from './stm.service';

describe('AppService', () => {
  let service: AppService;

  const mockStmService = {
    getRawData: () => {
      return { message: 'hardcoded stm data' };
    },
  } as StmService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        AppService,
        { provide: StmService, useValue: mockStmService },
      ],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to status-api!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to status-api!' });
    });
  });

  describe('getting data from the STM service', () => {
    it('should delegate to the STM service for STM data', () => {
      expect(service.getHardcodedStmData()).toEqual({
        message: 'hardcoded stm data',
      });
    });
  });
});
