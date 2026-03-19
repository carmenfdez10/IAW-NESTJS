import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ExamenTeorico } from '../../examen-teorico/entities/examen-teorico.entity';
import { ProfesorDisenaPractica } from '../../evaluacion/entities/profesor-disena-practica.entity';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nif: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column()
  apellido2: string;

  @OneToMany(() => ExamenTeorico, (et) => et.profesor)
  examenesDisenados: ExamenTeorico[];

  @OneToMany(() => ProfesorDisenaPractica, (pdp) => pdp.profesor)
  practicasDisenadas: ProfesorDisenaPractica[];
}