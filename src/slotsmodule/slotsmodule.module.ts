import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { slotsmoduleController } from './slotsmodule.controller';
import { SlotsmoduleService } from './slotsmodule.service';
import { Slot } from 'src/slotsmodule/slotsmodule.entity';
import { Reservation } from 'src/reservationmodule/reservationmodule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Slot, Reservation])],
  providers: [SlotsmoduleService],
  controllers: [slotsmoduleController],
})
export class SlotsmoduleModule {}
