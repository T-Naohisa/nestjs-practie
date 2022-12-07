import { Module, Global } from '@nestjs/common';
import { CatsController } from './controller/cats.controller';
import { CatsService } from './service/cats.service';

// Globalスコープにするとどこでも利用が可能になる
// moduleをimportする必要がない
@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // 複数のモジュールで扱いたい場合exportする
  exports: [CatsService],
})
export class CatsModule {}
