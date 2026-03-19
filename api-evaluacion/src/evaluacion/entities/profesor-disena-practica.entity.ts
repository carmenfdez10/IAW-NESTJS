import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Profesor } from '../../profesor/entities/profesor.entity';
import { Practica } from '../../practica/entities/practica.entity';

@Entity()
export class ProfesorDisenaPractica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string;

  @ManyToOne(() => Profesor, (prof) => prof.practicasDisenadas)
  profesor: Profesor;

  @ManyToOne(() => Practica, (prac) => prac.profesoresQueLaDisenaron)
  practica: Practica;
}