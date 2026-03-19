import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnoRealizaPractica } from './entities/alumno-realiza-practica.entity';
import { AlumnoHaceExamen } from './entities/alumno-hace-examen.entity';
import { ProfesorDisenaPractica } from './entities/profesor-disena-practica.entity';
import { CreateNotaPracticaDto, CreateNotaExamenDto } from './dto/create-evaluacion.dto';

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(AlumnoRealizaPractica)
    private repoAlumnoPractica: Repository<AlumnoRealizaPractica>,
    @InjectRepository(AlumnoHaceExamen)
    private repoAlumnoExamen: Repository<AlumnoHaceExamen>,
    @InjectRepository(ProfesorDisenaPractica)
    private repoProfesorPractica: Repository<ProfesorDisenaPractica>,
  ) {}

  // 1. Registrar Alumno hace Práctica
  async calificarPractica(dto: CreateNotaPracticaDto) {
    const registro = this.repoAlumnoPractica.create({
      alumno: { id: dto.alumnoId },
      practica: { id: dto.practicaId },
      fecha: dto.fecha,
      nota: dto.nota,
    });
    return await this.repoAlumnoPractica.save(registro);
  }

  // 2. Registrar Alumno hace Examen
  async calificarExamen(dto: CreateNotaExamenDto) {
    const registro = this.repoAlumnoExamen.create({
      alumno: { id: dto.alumnoId },
      examen: { id: dto.examenId },
      nota: dto.nota,
    });
    return await this.repoAlumnoExamen.save(registro);
  }

  // 3. Ver todos los resultados (con relaciones)
  async obtenerResultadosPracticas() {
    return await this.repoAlumnoPractica.find({ relations: ['alumno', 'practica'] });
  }
}