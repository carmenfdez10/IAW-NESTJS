export class CreateNotaPracticaDto {
  alumnoId: number;
  practicaId: number;
  fecha: string;
  nota: number;
}

export class CreateNotaExamenDto {
  alumnoId: number;
  examenId: number;
  nota: number;
}

export class CreateDisenoPracticaDto {
  profesorId: number;
  practicaId: number;
  fecha: string;
}