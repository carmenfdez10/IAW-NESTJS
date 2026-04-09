import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProfesorDto {
  @IsString() @IsNotEmpty()
  nif: string;

  @IsString() @IsNotEmpty()
  nombre: string;

  @IsString() @IsNotEmpty()
  apellido1: string;

  @IsString() @IsOptional()
  apellido2?: string;
}
