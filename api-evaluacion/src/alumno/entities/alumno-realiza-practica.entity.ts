import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Alumno } from './alumno.entity';
import { Practica } from '../../practica/entities/practica.entity';

@Entity()
export class AlumnoRealizaPractica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string;

  @Column('float')
  nota: number;

  @ManyToOne(() => Alumno, (alumno) => alumno.practicasRealizadas)
  alumno: Alumno;

  @ManyToOne(() => Practica, (practica) => practica.alumnosQueLaHicieron)
  practica: Practica;
}