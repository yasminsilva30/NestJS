import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudante } from './entities/estudante.entity';
import { CreateEstudanteDto } from './dto/create-estudante.dto';

@Injectable()
export class EstudantesService {
  constructor(
    @InjectRepository(Estudante)
    private estudanteRepository: Repository<Estudante>,
  ) {}

  create(createEstudanteDto: CreateEstudanteDto): Promise<Estudante> {
    const estudante = this.estudanteRepository.create(createEstudanteDto);
    return this.estudanteRepository.save(estudante);
  }

  findAll(): Promise<Estudante[]> {
    return this.estudanteRepository.find({ relations: ['cidade'] });
  }

  findOne(id: number): Promise<Estudante | null> {
    return this.estudanteRepository.findOne({
      where: { id },
      relations: ['cidades'],
    });
  }

  update(
    id: number,
    updateEstudanteDto: CreateEstudanteDto,
  ): Promise<Estudante> {
    return this.estudanteRepository.save({ ...updateEstudanteDto, id });
  }

  remove(id: number): Promise<void> {
    return this.estudanteRepository.delete(id).then(() => {});
  }
}
