import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCatDto } from 'src/dto/cats.dto';
import { CatsService } from 'src/service/cats.service';
import { Cat } from 'src/interface/cat.intercafe';

@Controller('cats')
export class CatsController {
  // コンストラクタで注入する
  // メンバの宣言と初期化を行う
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);

    return 'This action adds a new cat';
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
