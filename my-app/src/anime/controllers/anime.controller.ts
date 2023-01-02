import { Controller, Get } from '@nestjs/common';
import { AnimeService } from '../usecases/anime.usecase';

/**
 * アニメ情報を返却するcontroller
 *
 */

@Controller('anime')
export class AnimeController {
  // コンストラクタ注入
  constructor(private animeService: AnimeService) {}

  @Get()
  findAnimetionInfo(): string {
    const response = this.animeService.getAnimetionInfo();
    return response;
  }
}
