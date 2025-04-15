import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cidade } from 'src/cidades/entities/cidade.entity';

@Entity()
export class Estudante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  matricula: string;

  @Column()
  dt_nascimento: string;

  @ManyToOne(() => Cidade, (cidade) => cidade.estudantes)
  cidade: Cidade;
}
