import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uf } from './entities/uf.entity';
import { UfsService } from './ufs.service';
import { UfsController } from './ufs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Uf])],
  controllers: [UfsController],
  providers: [UfsService],
})
export class UfsModule {}
