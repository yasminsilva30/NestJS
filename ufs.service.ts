/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Uf } from './entities/uf.entity';
import { CreateUfDto } from './dto/create-uf.dto';

@Injectable()
export class UfsService {
  constructor(
    @InjectRepository(Uf)
    private readonly ufRepository: Repository<Uf>,
  ) {}

  create(createUfDto: CreateUfDto) {
    const uf = this.ufRepository.create(createUfDto);
    return this.ufRepository.save(uf);
  }

  findAll() {
    return this.ufRepository.find();
  }

  findOne(id: number) {
    return this.ufRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.ufRepository.delete(id);
  }
}