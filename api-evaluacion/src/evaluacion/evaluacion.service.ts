import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnoRealizaPractica } from './entities/alumno-realiza-practica.entity';
import { AlumnoHaceExamen } from './entities/alumno-hace-examen.entity';
import { ProfesorDisenaPractica } from './entities/profesor-disena-practica.entity';
import { CreateNotaPracticaDto, CreateNotaExamenDto, CreateDisenoPracticaDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';

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

  async obtenerResultadosPracticas() {
    return await this.repoAlumnoPractica.find({
      relations: ['alumno', 'practica'],
    });
  }

  async obtenerUnaNotaPractica(id: number) {
    const registro = await this.repoAlumnoPractica.findOne({
      where: { id },
      relations: ['alumno', 'practica'],
    });
    if (!registro) throw new NotFoundException(`Nota de práctica con ID ${id} no encontrada`);
    return registro;
  }

  async actualizarNotaPractica(id: number, dto: UpdateEvaluacionDto) {
    // Usamos preload para manejar la actualización de campos opcionales
    const registro = await this.repoAlumnoPractica.preload({
      id: id,
      ...dto
    });
    if (!registro) throw new NotFoundException(`No se pudo actualizar: ID ${id} no existe`);
    return await this.repoAlumnoPractica.save(registro);
  }

  async eliminarNotaPractica(id: number) {
    const resultado = await this.repoAlumnoPractica.delete(id);
    if (resultado.affected === 0) throw new NotFoundException(`ID ${id} no existe`);
    return { deleted: true, id };
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

  async obtenerResultadosExamenes() {
    return await this.repoAlumnoExamen.find({
      relations: ['alumno', 'examen'],
    });
  }

  async obtenerUnaNotaExamen(id: number) {
    const registro = await this.repoAlumnoExamen.findOne({
      where: { id },
      relations: ['alumno', 'examen'],
    });
    if (!registro) throw new NotFoundException(`Nota de examen con ID ${id} no encontrada`);
    return registro;
  }

  async actualizarNotaExamen(id: number, dto: UpdateEvaluacionDto) {
    const registro = await this.repoAlumnoExamen.preload({
      id: id,
      nota: dto.nota, // En examen según tu diagrama solo se suele cambiar la nota
    });
    if (!registro) throw new NotFoundException(`ID ${id} no encontrado`);
    return await this.repoAlumnoExamen.save(registro);
  }

  async eliminarNotaExamen(id: number) {
    await this.repoAlumnoExamen.delete(id);
    return { deleted: true, id };
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
  async obtenerDisenosPracticas() {
    return await this.repoProfesorPractica.find({
      relations: ['profesor', 'practica'],
    });
  }

  async eliminarDiseno(id: number) {
    await this.repoProfesorPractica.delete(id);
    return { deleted: true, id };
  }
}
