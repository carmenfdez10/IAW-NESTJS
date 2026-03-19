import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Practica } from './entities/practica.entity';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';

@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica)
    private practicaRepo: Repository<Practica>,
  ) {}

  async create(createPracticaDto: CreatePracticaDto) {
    const nueva = this.practicaRepo.create(createPracticaDto);
    return await this.practicaRepo.save(nueva);
  }

  async findAll() {
    return await this.practicaRepo.find();
  }

  async findOne(id: number) {
    return await this.practicaRepo.findOneBy({ id });
  }

  async update(id: number, updatePracticaDto: UpdatePracticaDto) {
    await this.practicaRepo.update(id, updatePracticaDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.practicaRepo.delete(id);
    return { deleted: true };
  }
}