import { Injectable, Body, ValidationPipe } from '@nestjs/common';
import { Cat } from '../interface/cat.intercafe';
import { CreateCatDto } from 'src/dto/cats.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  // bodyにバインドして検証が行える
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.cats.push(createCatDto);
  }
  findAll(): Cat[] {
    return this.cats;
  }
  findOne(id: number) {
    return id;
  }
}
