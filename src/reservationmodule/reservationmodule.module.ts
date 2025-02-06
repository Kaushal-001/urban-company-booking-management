import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationsService } from './reservationmodule.service';
import { ReservationmoduleController } from './reservationmodule.controller';
import { Reservation } from './reservationmodule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],
  providers: [ReservationsService],
  controllers: [ReservationmoduleController],
})
export class ReservationmoduleModule {}
