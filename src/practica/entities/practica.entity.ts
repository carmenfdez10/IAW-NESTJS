import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AlumnoRealizaPractica } from '../../evaluacion/entities/alumno-realiza-practica.entity';
import { ProfesorDisenaPractica } from '../../evaluacion/entities/profesor-disena-practica.entity';

@Entity()
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  dificultad: string;

  @OneToMany(() => AlumnoRealizaPractica, (arp) => arp.practica)
  alumnosQueLaHicieron: AlumnoRealizaPractica[];

  @OneToMany(() => ProfesorDisenaPractica, (pdp) => pdp.practica)
  profesoresQueLaDisenaron: ProfesorDisenaPractica[];
}