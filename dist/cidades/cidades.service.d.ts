import { Repository } from 'typeorm';
import { Cidade } from './entities/cidade.entity';
import { CreateCidadeDto } from './dto/create-cidade.dto';
export declare class CidadesService {
    private cidadeRepository;
    constructor(cidadeRepository: Repository<Cidade>);
    create(createCidadeDto: CreateCidadeDto): Promise<Cidade>;
    findAll(): Promise<Cidade[]>;
    findOne(id: number): Promise<Cidade | null>;
    update(id: number, updateCidadeDto: CreateCidadeDto): Promise<Cidade>;
    remove(id: number): Promise<void>;
}
