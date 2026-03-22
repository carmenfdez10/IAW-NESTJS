import { Controller, Get, Post, Body } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { CreateNotaPracticaDto, CreateNotaExamenDto, CreateDisenoPracticaDto } from './dto/create-evaluacion.dto';

@Controller('evaluacion')
export class EvaluacionController {
  constructor(private readonly evaluacionService: EvaluacionService) {}

  // 1. Endpoint para registrar que un Alumno ha realizado una Práctica (con nota y fecha)
  @Post('practica')
  crearNotaPractica(@Body() dto: CreateNotaPracticaDto) {
    return this.evaluacionService.calificarPractica(dto);
  }

  // 2. Endpoint para registrar que un Alumno ha hecho un Examen (con nota)
  @Post('examen')
  crearNotaExamen(@Body() dto: CreateNotaExamenDto) {
    return this.evaluacionService.calificarExamen(dto);
  }

  // 3. Endpoint para registrar que un Profesor ha diseñado una Práctica (con fecha)
  @Post('diseno-practica')
  crearDiseno(@Body() dto: CreateDisenoPracticaDto) {
    return this.evaluacionService.registrarDisenoPractica(dto);
  }

  // 4. Listar todas las notas de prácticas (para el vídeo)
  @Get('practicas')
  listarPracticas() {
    return this.evaluacionService.obtenerResultadosPracticas();
  }

  // 5. Listar todas las notas de exámenes
  @Get('examenes')
  listarExamenes() {
    return this.evaluacionService.obtenerResultadosExamenes();
  }
}