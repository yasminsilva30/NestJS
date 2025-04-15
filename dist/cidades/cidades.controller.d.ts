import { CidadesService } from './cidades.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
export declare class CidadesController {
    private readonly cidadesService;
    constructor(cidadesService: CidadesService);
    create(createCidadeDto: CreateCidadeDto): Promise<import("./entities/cidade.entity").Cidade>;
    findAll(): Promise<import("./entities/cidade.entity").Cidade[]>;
    findOne(id: string): Promise<import("./entities/cidade.entity").Cidade | null>;
    remove(id: string): Promise<void>;
}
