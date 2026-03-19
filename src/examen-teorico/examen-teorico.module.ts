import { Module } from '@nestjs/common';
import { ExamenTeoricoService } from './examen-teorico.service';
import { ExamenTeoricoController } from './examen-teorico.controller';

@Module({
  controllers: [ExamenTeoricoController],
  providers: [ExamenTeoricoService],
})
export class ExamenTeoricoModule {}
