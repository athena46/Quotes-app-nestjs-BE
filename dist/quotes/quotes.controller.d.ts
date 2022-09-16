import { Quotes } from './quotes.entity';
import { QuotesService } from './quotes.service';
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    getAllQuotes(): Promise<Array<Quotes>>;
    find(id: any): Promise<Quotes>;
    create(createQuotes: Quotes): Promise<"error in creating quotes" | "quotes created successfully">;
    update(id: string, body: any): Promise<void>;
    remove(id: string): Promise<void>;
}
