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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
const typeorm_1 = require("typeorm");
const cidade_entity_1 = require("../../cidades/entities/cidade.entity");
let Estudante = class Estudante {
    id;
    nome;
    matricula;
    dt_nascimento;
    cidade;
};
exports.Estudante = Estudante;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Estudante.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudante.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudante.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudante.prototype, "dt_nascimento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cidade_entity_1.Cidade, (cidade) => cidade.estudantes),
    __metadata("design:type", cidade_entity_1.Cidade)
], Estudante.prototype, "cidade", void 0);
exports.Estudante = Estudante = __decorate([
    (0, typeorm_1.Entity)()
], Estudante);
//# sourceMappingURL=estudante.entity.js.map