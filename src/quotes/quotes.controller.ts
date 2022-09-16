import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Quotes } from './quotes.entity';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get()
  async getAllQuotes(): Promise<Array<Quotes>> {
    return this.quotesService.getAllQuotes();
  }

  @Get(':id')
  async find(@Param('id') id: any): Promise<Quotes> {
    return this.quotesService.find(id);
  }

  @Post()
  async create(@Body() createQuotes: Quotes) {
    const quote = await this.quotesService.create(createQuotes);
    if (!quote) {
      return 'error in creating quotes';
    }
    return 'quotes created successfully';
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const newQuotes = await this.quotesService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.quotesService.delete(id);
}
}
