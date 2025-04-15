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
exports.EstudantesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const estudante_entity_1 = require("./entities/estudante.entity");
let EstudantesService = class EstudantesService {
    estudanteRepository;
    constructor(estudanteRepository) {
        this.estudanteRepository = estudanteRepository;
    }
    create(createEstudanteDto) {
        const estudante = this.estudanteRepository.create(createEstudanteDto);
        return this.estudanteRepository.save(estudante);
    }
    findAll() {
        return this.estudanteRepository.find({ relations: ['cidade'] });
    }
    findOne(id) {
        return this.estudanteRepository.findOne({
            where: { id },
            relations: ['cidades'],
        });
    }
    update(id, updateEstudanteDto) {
        return this.estudanteRepository.save({ ...updateEstudanteDto, id });
    }
    remove(id) {
        return this.estudanteRepository.delete(id).then(() => { });
    }
};
exports.EstudantesService = EstudantesService;
exports.EstudantesService = EstudantesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(estudante_entity_1.Estudante)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EstudantesService);
//# sourceMappingURL=estudantes.service.js.map