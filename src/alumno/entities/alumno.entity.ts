import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AlumnoRealizaPractica } from '../../evaluacion/entities/alumno-realiza-practica.entity';
import { AlumnoHaceExamen } from '../../evaluacion/entities/alumno-hace-examen.entity';

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nif: string;

  @Column()
  grupo: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column()
  apellido2: string;

  @OneToMany(() => AlumnoRealizaPractica, (arp) => arp.alumno)
  practicasRealizadas: AlumnoRealizaPractica[];

  @OneToMany(() => AlumnoHaceExamen, (ahe) => ahe.alumno)
  examenesHechos: AlumnoHaceExamen[];
}