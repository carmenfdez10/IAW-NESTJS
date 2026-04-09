import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamenTeoricoService } from './examen-teorico.service';
import { ExamenTeoricoController } from './examen-teorico.controller';
import { ExamenTeorico } from './entities/examen-teorico.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExamenTeorico]),
  ],
  controllers: [ExamenTeoricoController],
  providers: [ExamenTeoricoService],
})
export class ExamenTeoricoModule {}
