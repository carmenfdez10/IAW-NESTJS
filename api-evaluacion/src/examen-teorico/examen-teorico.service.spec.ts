import { Test, TestingModule } from '@nestjs/testing';
import { ExamenTeoricoService } from './examen-teorico.service';

describe('ExamenTeoricoService', () => {
  let service: ExamenTeoricoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamenTeoricoService],
    }).compile();

    service = module.get<ExamenTeoricoService>(ExamenTeoricoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
