import { Module } from '@nestjs/common';
import { AnimeController } from 'anime/controllers/anime.controller';

@Module({
  controllers: [AnimeController],
  providers: [],
  exports: [],
})
export class AnimeModule {}
