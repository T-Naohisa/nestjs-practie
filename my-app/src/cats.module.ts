import { Module, Global } from '@nestjs/common';
import { CatsController } from './practice/controller/cats.controller';
import { CatsService } from './practice/service/cats.service';

// Globalスコープにするとどこでも利用が可能になる
// moduleをimportする必要がない
@Global()
@Module({
  controllers: [CatsController],
  providers: [
    {
      provide: CatsService,
      useClass: CatsService,
    },
  ],
  // 複数のモジュールで扱いたい場合exportする
  exports: [CatsService],
})
export class CatsModule {}
