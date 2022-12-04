import { Controller, Get, Post, Req } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Get()
  findAll(@Req() request: FastifyRequest): string {
    return 'This action returns all cats';
  }
}
