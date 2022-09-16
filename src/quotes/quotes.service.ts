import { Delete, Get, Injectable, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quotes } from './quotes.entity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quotes) private quotesRepository: Repository<Quotes>,
  ) {}

  @Get()
  async getAllQuotes(): Promise<Array<Quotes>> {
    return this.quotesRepository.find({});
  }

  @Get(':id')
  async find(@Param('id') id: any): Promise<Quotes> {
    return this.quotesRepository.findOne(id);
  }
  
  @Post()
  async create(quotes: Quotes): Promise<Quotes> {
    return this.quotesRepository.save(this.quotesRepository.create(quotes));
  }

  @Put()
   async update(id: string, data: any): Promise<any> {
    return this.quotesRepository.createQueryBuilder()
      .update()
      .set({
        author: data.author,
        quote: data.quote,
        tags: data.tags,
      })
      .where('id = :id', { id })
      .execute();
  }

  @Delete()
  async delete(id: string): Promise<any> {
    return this.quotesRepository.createQueryBuilder()
      .delete()
      .from(Quotes)
      .where('id = :id', { id })
      .execute();
  }


}
