import { Repository } from 'typeorm';
import { Uf } from './entities/uf.entity';
import { CreateUfDto } from './dto/create-uf.dto';
export declare class UfsService {
    private readonly ufRepository;
    constructor(ufRepository: Repository<Uf>);
    create(createUfDto: CreateUfDto): Promise<Uf>;
    findAll(): Promise<Uf[]>;
    findOne(id: number): Promise<Uf | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
