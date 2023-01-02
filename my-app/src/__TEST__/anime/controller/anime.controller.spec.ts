import { Test, TestingModule } from '@nestjs/testing';
import { AnimeController } from '../../../anime/controllers/anime.controller';
import { AnimeService } from '../../../anime/usecases/anime.usecase';

describe('AnimeController', () => {
  let animeController: AnimeController;
  let animeService: AnimeService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AnimeController],
      providers: [AnimeService],
    }).compile();

    animeController = app.get<AnimeController>(AnimeController);
  });

  describe('findAnimetionInfo method', () => {
    it('findAnimetionInfo success', () => {
      expect(animeController.findAnimetionInfo()).toBe('animetion info');
    });
  });
});
