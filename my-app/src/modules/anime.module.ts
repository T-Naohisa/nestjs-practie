import { Module } from '@nestjs/common';
import { AnimeController } from 'anime/controllers/anime.controller';
import { AnimeService } from 'anime/usecases/anime.usecase';

@Module({
  controllers: [AnimeController],
  providers: [AnimeService],
  exports: [],
})
export class AnimeModule {}
