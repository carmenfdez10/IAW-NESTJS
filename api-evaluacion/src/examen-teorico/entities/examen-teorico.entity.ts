import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Profesor } from '../../profesor/entities/profesor.entity';
import { AlumnoHaceExamen } from '../../evaluacion/entities/alumno-hace-examen.entity';

@Entity()
export class ExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  numero_preguntas: number;

  @Column()
  fecha: string;

  @ManyToOne(() => Profesor, (p) => p.examenesDisenados)
  profesor: Profesor;

  @OneToMany(() => AlumnoHaceExamen, (ahe) => ahe.examen)
  notasAlumnos: AlumnoHaceExamen[];
}