import { Test, TestingModule } from '@nestjs/testing';
import { RomanController } from './roman.controller';
import { RomanService } from '../../services/roman/roman.service';

describe('RomanController', () => {
  let controller: RomanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RomanController],
      providers: [RomanService],
    }).compile();

    controller = module.get<RomanController>(RomanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('fromArab', () => {
    it('10 should return X', () => {
      expect(controller.fromArab(10)).toStrictEqual('X');
    });

    it('50 should return L', () => {
      expect(controller.fromArab(50)).toStrictEqual('L');
    });

    it('-4 should throw invalid input', () => {
      expect(() => controller.fromArab(-4)).toThrow(
        'The input must be within 1 and 3,999.',
      );
    });

    it('4000 should throw invalid input', () => {
      expect(() => controller.fromArab(4000)).toThrow(
        'The input must be within 1 and 3,999.',
      );
    });
  });
});
