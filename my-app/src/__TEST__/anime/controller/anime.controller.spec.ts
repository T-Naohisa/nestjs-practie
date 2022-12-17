import { Test, TestingModule } from '@nestjs/testing';
import { AnimeController } from '../../../anime/controllers/anime.controller';

describe('AnimeController', () => {
  let animeController: AnimeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AnimeController],
      providers: [],
    }).compile();

    animeController = app.get<AnimeController>(AnimeController);
  });

  describe('findAnimetionInfo method', () => {
    it('findAnimetionInfo success', () => {
      expect(animeController.findAnimetionInfo()).toBe('アニメ情報を返す');
    });
  });
});
