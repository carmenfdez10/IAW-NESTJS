import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnoRealizaPractica } from './entities/alumno-realiza-practica.entity';
import { AlumnoHaceExamen } from './entities/alumno-hace-examen.entity';
import { ProfesorDisenaPractica } from './entities/profesor-disena-practica.entity';
import { CreateNotaPracticaDto, CreateNotaExamenDto, CreateDisenoPracticaDto } from './dto/create-evaluacion.dto';

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

  // 1. Alumno realiza Práctica
  async calificarPractica(dto: CreateNotaPracticaDto) {
    const nuevo = this.repoAlumnoPractica.create({
      alumno: { id: dto.alumnoId },
      practica: { id: dto.practicaId },
      fecha: dto.fecha,
      nota: dto.nota,
    });
    return await this.repoAlumnoPractica.save(nuevo);
  }

  // 2. Alumno hace Examen
  async calificarExamen(dto: CreateNotaExamenDto) {
    const nuevo = this.repoAlumnoExamen.create({
      alumno: { id: dto.alumnoId },
      examen: { id: dto.examenId },
      nota: dto.nota,
    });
    return await this.repoAlumnoExamen.save(nuevo);
  }

  // 3. Profesor diseña Práctica
  async registrarDisenoPractica(dto: CreateDisenoPracticaDto) {
    const nuevo = this.repoProfesorPractica.create({
      profesor: { id: dto.profesorId },
      practica: { id: dto.practicaId },
      fecha: dto.fecha,
    });
    return await this.repoProfesorPractica.save(nuevo);
  }

  // 4. Obtener resultados de prácticas
  async obtenerResultadosPracticas() {
    return await this.repoAlumnoPractica.find({
      relations: ['alumno', 'practica'],
    });
  }

  // 5. Obtener resultados de exámenes
  async obtenerResultadosExamenes() {
    return await this.repoAlumnoExamen.find({
      relations: ['alumno', 'examen'],
    });
  }
}