import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SlotsmoduleModule } from './slotsmodule/slotsmodule.module';
import { ReservationmoduleModule } from './reservationmodule/reservationmodule.module';
import { PeopleModule } from './people/people.module';
import { Reservation } from './reservationmodule/reservationmodule.entity';
import { Person } from './people/Entities/person.entity';
import { Slot } from './slotsmodule/slotsmodule.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'kaushal@16',
      database: 'booking_system',
      entities: [Person, Reservation, Slot],
      synchronize: true,
    }),
    SlotsmoduleModule,
    ReservationmoduleModule,
    PeopleModule,
  ],
})
export class AppModule {}
