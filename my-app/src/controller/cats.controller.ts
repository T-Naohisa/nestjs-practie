import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCatDto } from 'src/dto/cats.dto';
@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() CreateCatDto: CreateCatDto): string {
    return 'This action adds a new cat';
  }
  @Get()
  findAll(@Req() request: FastifyRequest): string {
    return 'This action returns all cats';
  }
}
