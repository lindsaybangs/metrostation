import { Test, TestingModule } from '@nestjs/testing';
import { StmService } from './stm.service';

describe('StmService', () => {
  let provider: StmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StmService],
    }).compile();

    provider = module.get<StmService>(StmService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
