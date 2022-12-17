import { Test } from '@nestjs/testing';
import { AnimeService } from '../../../anime/usecases/anime.usecase';

describe('AnimeService', () => {
  let service: AnimeService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AnimeService],
    }).compile();
    service = module.get(AnimeService);
  });

  describe('getAnimetionInfo method', () => {
    it('return string', () => {
      const returnValue = service.getAnimetionInfo();
      const result = 'animetion info';
      expect(returnValue).toBe(result);
    });
  });
});
