import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './practice/app.service';
import { CatsModule } from './practice/cats.module';
import { AnimeModule } from 'modules/anime.module';
import { LoggerMiddleware } from './practice/middleware/logger.middleware';

@Module({
  imports: [CatsModule, AnimeModule],
  controllers: [AppController],
  providers: [AppService],
})

/**
 * ミドルウェアを含むモジュールはNestModuleインターフェースを実装する必要がる
 * applyでミドルウェアを指定する
 */
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes('cats');
//   }
// }
