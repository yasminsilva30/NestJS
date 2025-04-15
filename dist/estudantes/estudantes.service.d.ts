import { Repository } from 'typeorm';
import { Estudante } from './entities/estudante.entity';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
export declare class EstudantesService {
    private estudanteRepository;
    constructor(estudanteRepository: Repository<Estudante>);
    create(createEstudanteDto: CreateEstudanteDto): Promise<Estudante>;
    findAll(): Promise<Estudante[]>;
    findOne(id: number): Promise<Estudante | null>;
    update(id: number, updateEstudanteDto: CreateEstudanteDto): Promise<Estudante>;
    remove(id: number): Promise<void>;
}
