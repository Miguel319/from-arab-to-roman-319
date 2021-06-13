import { Test, TestingModule } from '@nestjs/testing';
import { RomanService } from './roman.service';

describe('RomanService', () => {
  let service: RomanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RomanService],
    }).compile();

    service = module.get<RomanService>(RomanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
