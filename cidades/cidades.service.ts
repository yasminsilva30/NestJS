import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cidade } from './entities/cidade.entity';
import { CreateCidadeDto } from './dto/create-cidade.dto';

@Injectable()
export class CidadesService {
  constructor(
    @InjectRepository(Cidade)
    private cidadeRepository: Repository<Cidade>,
  ) {}

  create(createCidadeDto: CreateCidadeDto): Promise<Cidade> {
    const cidade = this.cidadeRepository.create(createCidadeDto);
    return this.cidadeRepository.save(cidade);
  }

  findAll(): Promise<Cidade[]> {
    return this.cidadeRepository.find({ relations: ['uf', 'estudantes'] });
  }

  findOne(id: number): Promise<Cidade | null> {
    return this.cidadeRepository.findOne({
      where: { id },
      relations: ['cidades'],
    });
  }

  update(id: number, updateCidadeDto: CreateCidadeDto): Promise<Cidade> {
    return this.cidadeRepository.save({ ...updateCidadeDto, id });
  }

  remove(id: number): Promise<void> {
    return this.cidadeRepository.delete(id).then(() => {});
  }
}
