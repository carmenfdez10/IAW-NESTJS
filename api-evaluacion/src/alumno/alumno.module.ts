import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa esto
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';
import { Alumno } from './entities/alumno.entity'; // Importa tu entidad

@Module({
  imports: [
    TypeOrmModule.forFeature([Alumno]), // ¡ESTA LÍNEA ES VITAL!
  ],
  controllers: [AlumnoController],
  providers: [AlumnoService],
  exports: [TypeOrmModule] // Opcional, pero ayuda
})
export class AlumnoModule {}