import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Alumno } from '../../alumno/entities/alumno.entity';
import { ExamenTeorico } from '../../examen-teorico/entities/examen-teorico.entity';

@Entity()
export class AlumnoHaceExamen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  nota: number;

  @ManyToOne(() => Alumno, (a) => a.examenesHechos)
  alumno: Alumno;

  @ManyToOne(() => ExamenTeorico, (e) => e.notasAlumnos)
  examen: ExamenTeorico;
}