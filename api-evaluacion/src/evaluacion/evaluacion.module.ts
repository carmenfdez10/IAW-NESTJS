import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluacionService } from './evaluacion.service';
import { EvaluacionController } from './evaluacion.controller';
import { AlumnoRealizaPractica } from './entities/alumno-realiza-practica.entity';
import { AlumnoHaceExamen } from './entities/alumno-hace-examen.entity';
import { ProfesorDisenaPractica } from './entities/profesor-disena-practica.entity';

@Module({
  imports: [
    // Aquí registramos las 3 tablas intermedias para que el Servicio pueda usarlas
    TypeOrmModule.forFeature([
      AlumnoRealizaPractica,
      AlumnoHaceExamen,
      ProfesorDisenaPractica
    ]),
  ],
  controllers: [EvaluacionController],
  providers: [EvaluacionService],
})
export class EvaluacionModule {}