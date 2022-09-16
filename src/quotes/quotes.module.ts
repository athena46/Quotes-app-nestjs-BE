import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quotes } from './quotes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quotes])],
  providers: [QuotesService],
  controllers: [QuotesController],
})
export class QuotesModule {}
