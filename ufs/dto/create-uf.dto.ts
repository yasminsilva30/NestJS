/* eslint-disable @typescript-eslint/no-unsafe-call */
// create-uf.dto.ts

import { IsString } from 'class-validator';

export class CreateUfDto {
  @IsString()
  nome: string;

  @IsString()
  sigla: string;
}
