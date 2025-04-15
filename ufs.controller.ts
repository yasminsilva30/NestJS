/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { UfsService } from './ufs.service';
import { CreateUfDto } from './dto/create-uf.dto';

@Controller('ufs')
export class UfsController {
  constructor(private readonly ufsService: UfsService) {}

  @Post()
  create(@Body() createUfDto: CreateUfDto) {
    return this.ufsService.create(createUfDto);
  }

  @Get()
  findAll() {
    return this.ufsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ufsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ufsService.remove(+id);
  }
}