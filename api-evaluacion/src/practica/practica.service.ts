import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Practica } from './entities/practica.entity';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';

@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica)
    private readonly practicaRepo: Repository<Practica>,
  ) {}

  async create(dto: CreatePracticaDto) {
    const nueva = this.practicaRepo.create(dto);
    return await this.practicaRepo.save(nueva);
  }

  async findAll() {
    return await this.practicaRepo.find();
  }

  async findOne(id: number) {
    const practica = await this.practicaRepo.findOneBy({ id });
    if (!practica) throw new NotFoundException(`Práctica ${id} no encontrada`);
    return practica;
  }

  async update(id: number, dto: UpdatePracticaDto) {
    const practica = await this.findOne(id);
    const actualizada = Object.assign(practica, dto);
    return await this.practicaRepo.save(actualizada);
  }

  async remove(id: number) {
    const practica = await this.findOne(id);
    await this.practicaRepo.remove(practica);
    return { deleted: true };
  }
}