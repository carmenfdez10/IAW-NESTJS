import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno)
    private alumnoRepo: Repository<Alumno>,
  ) {}

  async create(createAlumnoDto: CreateAlumnoDto) {
    const nuevo = this.alumnoRepo.create(createAlumnoDto);
    return await this.alumnoRepo.save(nuevo);
  }

  async findAll() {
    return await this.alumnoRepo.find();
  }

  async findOne(id: number) {
    return await this.alumnoRepo.findOneBy({ id });
  }

  async update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    // 1. Buscamos si existe
    const alumno = await this.alumnoRepo.findOneBy({ id });
        
    if (!alumno) {
      throw new NotFoundException(`Alumno con ID ${id} no encontrado`);
    }

    // 2. Mezclamos los datos antiguos con los nuevos
    const alumnoActualizado = Object.assign(alumno, updateAlumnoDto);

    // 3. Guardamos
    return await this.alumnoRepo.save(alumnoActualizado);
    }

  async remove(id: number) {
    const alumno = await this.alumnoRepo.findOneBy({ id });
    if (!alumno) throw new NotFoundException(`Alumno con ID ${id} no existe`);

    await this.alumnoRepo.remove(alumno);
    return { deleted: true };
  }
}