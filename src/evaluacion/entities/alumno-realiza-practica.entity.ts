import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Alumno } from '../../alumno/entities/alumno.entity';
import { Practica } from '../../practica/entities/practica.entity';

@Entity()
export class AlumnoRealizaPractica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string;

  @Column('float')
  nota: number;

  @ManyToOne(() => Alumno, (a) => a.practicasRealizadas)
  alumno: Alumno;

  @ManyToOne(() => Practica, (p) => p.alumnosQueLaHicieron)
  practica: Practica;
}