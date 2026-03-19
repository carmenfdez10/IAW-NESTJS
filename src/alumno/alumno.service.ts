import { Injectable } from '@nestjs/common';
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
    await this.alumnoRepo.update(id, updateAlumnoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.alumnoRepo.delete(id);
    return { deleted: true };
  }
}