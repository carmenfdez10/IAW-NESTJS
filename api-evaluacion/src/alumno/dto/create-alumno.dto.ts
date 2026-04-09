import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAlumnoDto {
  @IsString() 
  @IsNotEmpty()
  nif: string;

  @IsString() 
  @IsNotEmpty()
  grupo: string;

  @IsString() 
  @IsNotEmpty()
  nombre: string;

  @IsString() 
  @IsNotEmpty()
  apellido1: string;

  @IsString() 
  @IsOptional()
  apellido2?: string;
}