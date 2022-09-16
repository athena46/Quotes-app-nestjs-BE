"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const quotes_entity_1 = require("./quotes.entity");
let QuotesService = class QuotesService {
    constructor(quotesRepository) {
        this.quotesRepository = quotesRepository;
    }
    async getAllQuotes() {
        return this.quotesRepository.find({});
    }
    async find(id) {
        return this.quotesRepository.findOne(id);
    }
    async create(quotes) {
        return this.quotesRepository.save(this.quotesRepository.create(quotes));
    }
    async update(id, data) {
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
    async delete(id) {
        return this.quotesRepository.createQueryBuilder()
            .delete()
            .from(quotes_entity_1.Quotes)
            .where('id = :id', { id })
            .execute();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuotesService.prototype, "getAllQuotes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuotesService.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [quotes_entity_1.Quotes]),
    __metadata("design:returntype", Promise)
], QuotesService.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], QuotesService.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuotesService.prototype, "delete", null);
QuotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(quotes_entity_1.Quotes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QuotesService);
exports.QuotesService = QuotesService;
//# sourceMappingURL=quotes.service.js.map