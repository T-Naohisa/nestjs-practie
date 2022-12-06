import { Module } from '@nestjs/common';
import { CatsController } from './controller/cats.controller';
import { CatsService } from './service/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // 複数のモジュールで扱いたい場合exportする
  exports: [CatsService],
})
export class CatsModule {}
