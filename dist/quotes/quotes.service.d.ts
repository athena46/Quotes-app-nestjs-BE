import { Repository } from 'typeorm';
import { Quotes } from './quotes.entity';
export declare class QuotesService {
    private quotesRepository;
    constructor(quotesRepository: Repository<Quotes>);
    getAllQuotes(): Promise<Array<Quotes>>;
    find(id: any): Promise<Quotes>;
    create(quotes: Quotes): Promise<Quotes>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
