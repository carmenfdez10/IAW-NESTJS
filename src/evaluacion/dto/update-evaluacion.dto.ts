import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaPracticaDto } from './create-evaluacion.dto';

export class UpdateEvaluacionDto extends PartialType(CreateNotaPracticaDto) {}