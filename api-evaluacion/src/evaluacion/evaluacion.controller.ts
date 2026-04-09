import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { CreateNotaPracticaDto, CreateNotaExamenDto, CreateDisenoPracticaDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';

@Controller('evaluacion')
export class EvaluacionController {
  constructor(private readonly evaluacionService: EvaluacionService) {}

  // 1. Crear calificación de práctica
  @Post('practica')
  crearNotaPractica(@Body() dto: CreateNotaPracticaDto) {
    return this.evaluacionService.calificarPractica(dto);
  }

  // 2. Listar todas las notas de practicas
  @Get('practica')
  listarPracticas() {
    return this.evaluacionService.obtenerResultadosPracticas();
  }

  // 3. Obtener una nota específica por su ID
  @Get('practica/:id')
  obtenerUna(@Param('id') id: string) {
    return this.evaluacionService.obtenerUnaNotaPractica(+id);
  }

  // 4. Actualizar una nota 
  @Patch('practica/:id')
  actualizar(@Param('id') id: string, @Body() dto: UpdateEvaluacionDto) {
    return this.evaluacionService.actualizarNotaPractica(+id, dto);
  }

  // 5. Borrar una calificacion
  @Delete('practica/:id')
  borrar(@Param('id') id: string) {
    return this.evaluacionService.eliminarNotaPractica(+id);
  }

  // 6. Registrar un Alumno ha hecho un Examen (con nota)
  @Post('examen')
  crearNotaExamen(@Body() dto: CreateNotaExamenDto) {
    return this.evaluacionService.calificarExamen(dto);
  }

  // 7. Listar las notas de los exámenes 
  @Get('examen')
  listarExamenes() {
    return this.evaluacionService.obtenerResultadosExamenes();
  }

  // 3. Profesor ha diseñado una Práctica 
  @Post('diseno-practica')
  crearDiseno(@Body() dto: CreateDisenoPracticaDto) {
    return this.evaluacionService.registrarDisenoPractica(dto);
  }
}