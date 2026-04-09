import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
export class CreateNotaPracticaDto {
  @IsNumber()
  @IsNotEmpty()
  alumnoId: number;

  @IsNumber()
  @IsNotEmpty()
  practicaId: number;

  @IsString()
  @IsNotEmpty()
  fecha: string;

  @IsNumber()
  @IsNotEmpty()
  nota: number;
}

export class CreateNotaExamenDto {
  @IsNumber()
  @IsNotEmpty()
  alumnoId: number;

  @IsNumber()
  @IsNotEmpty()
  examenId: number;

  @IsNumber()
  @IsNotEmpty()
  nota: number;
}

export class CreateDisenoPracticaDto {
  @IsNumber()
  @IsNotEmpty()
  profesorId: number;

  @IsNumber()
  @IsNotEmpty()
  practicaId: number;

  @IsString()
  @IsNotEmpty()
  fecha: string;
}