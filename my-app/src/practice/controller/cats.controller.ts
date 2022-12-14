import {
  Controller,
  Get,
  Post,
  Param,
  Req,
  Body,
  UseFilters,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCatDto } from 'practice/dto/cats.dto';
import { CatsService } from 'practice/service/cats.service';
import { Cat } from 'practice/interface/cat.intercafe';
import { HttpExceptionFilter } from 'practice/filter/http-exception.filter';
import { LoggingInterceptor } from 'practice/intersepter/logging.intercepter';
import { User } from 'practice/decorator/user.decorator';

@UseInterceptors(LoggingInterceptor)
@Controller('cats')
export class CatsController {
  // コンストラクタで注入する
  // メンバの宣言と初期化を行う
  constructor(private catsService: CatsService) {}

  /**
   * HttpExceptionFilterのインスタンスを生成している
   * クラスのほうがメモリ使用量を削減できる
   *
   */
  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);

    return 'This action adds a new cat';
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  /**
   * piprの役割
   * 変換：入力データの型を変換
   * 検証：入力データの評価、通してよければ処理を実行。間違っていれば例外をthrowする
   * @param id
   * @returns
   */
  @Get(':id')
  async findOne(
    // @User('firstName') firstName: string,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.catsService.findOne(id);
  }
}
