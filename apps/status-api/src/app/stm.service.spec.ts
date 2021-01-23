import { Test, TestingModule } from '@nestjs/testing';
import { StmService } from './stm.service';
import { HttpService } from '@nestjs/common';

describe('StmService', () => {
  let provider: StmService;

  const mockHttpService = {} as HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StmService,
        { provide: HttpService, useValue: mockHttpService },
      ],
    }).compile();

    provider = module.get<StmService>(StmService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  describe('retrieving raw data', () => {
    it('should query STM to get data', () => {
      // @todo
    });
  });
});
