import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './entities/profesor.entity';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private readonly profesorRepo: Repository<Profesor>,
  ) {}

  async create(dto: CreateProfesorDto) {
    const nuevo = this.profesorRepo.create(dto);
    return await this.profesorRepo.save(nuevo);
  }

  async findAll() {
    return await this.profesorRepo.find();
  }

  async findOne(id: number) {
    const profesor = await this.profesorRepo.findOneBy({ id });
    if (!profesor) throw new NotFoundException(`Profesor ${id} no encontrado`);
    return profesor;
  }

  async update(id: number, dto: UpdateProfesorDto) {
    const profesor = await this.findOne(id);
    const actualizado = Object.assign(profesor, dto);
    return await this.profesorRepo.save(actualizado);
  }

  async remove(id: number) {
    const profesor = await this.findOne(id);
    await this.profesorRepo.remove(profesor);
    return { deleted: true };
  }
}
