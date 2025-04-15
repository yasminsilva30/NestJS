import { IsString } from 'class-validator';

export class CreateEstudanteDto {
  @IsString()
  nome: string;

  @IsString()
  matricula: string;

  @IsString()
  dt_nascimento: string;

  cidade_id: number;
}
