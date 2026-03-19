import { Injectable } from '@nestjs/common';
import { CreateExamenTeoricoDto } from './dto/create-examen-teorico.dto';
import { UpdateExamenTeoricoDto } from './dto/update-examen-teorico.dto';

@Injectable()
export class ExamenTeoricoService {
  create(createExamenTeoricoDto: CreateExamenTeoricoDto) {
    return 'This action adds a new examenTeorico';
  }

  findAll() {
    return `This action returns all examenTeorico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examenTeorico`;
  }

  update(id: number, updateExamenTeoricoDto: UpdateExamenTeoricoDto) {
    return `This action updates a #${id} examenTeorico`;
  }

  remove(id: number) {
    return `This action removes a #${id} examenTeorico`;
  }
}
