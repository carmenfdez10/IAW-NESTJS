import { Test, TestingModule } from '@nestjs/testing';
import { ExamenTeoricoController } from './examen-teorico.controller';
import { ExamenTeoricoService } from './examen-teorico.service';

describe('ExamenTeoricoController', () => {
  let controller: ExamenTeoricoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamenTeoricoController],
      providers: [ExamenTeoricoService],
    }).compile();

    controller = module.get<ExamenTeoricoController>(ExamenTeoricoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
