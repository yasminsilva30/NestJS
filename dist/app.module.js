"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ufs_module_1 = require("./ufs/ufs.module");
const cidades_module_1 = require("./cidades/cidades.module");
const estudantes_module_1 = require("./estudantes/estudantes.module");
const uf_entity_1 = require("./ufs/entities/uf.entity");
const cidade_entity_1 = require("./cidades/entities/cidade.entity");
const estudante_entity_1 = require("./estudantes/entities/estudante.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db.sqlite',
                entities: [uf_entity_1.Uf, cidade_entity_1.Cidade, estudante_entity_1.Estudante],
                synchronize: true,
            }),
            ufs_module_1.UfsModule,
            cidades_module_1.CidadesModule,
            estudantes_module_1.EstudantesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map