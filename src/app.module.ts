import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoModule } from './alumno/alumno.module';
import { ProfesorModule } from './profesor/profesor.module';
import { PracticaModule } from './practica/practica.module';
import { ExamenTeoricoModule } from './examen-teorico/examen-teorico.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true, // ¡Solo para desarrollo! Crea las tablas automáticamente.
    }),
    AlumnoModule,
    ProfesorModule,
    PracticaModule,
    ExamenTeoricoModule,
    EvaluacionModule,
    // Aquí importaremos los módulos más adelante
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
