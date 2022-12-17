import { Controller, Get } from '@nestjs/common';

/**
 * アニメ情報を返却するcontroller
 *
 */

@Controller('anime')
export class AnimeController {
  @Get()
  findAnimetionInfo(): string {
    return 'アニメ情報を返す';
  }
}