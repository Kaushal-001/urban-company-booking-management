import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slot } from 'src/slotsmodule/slotsmodule.entity';
import { Reservation } from 'src/reservationmodule/reservationmodule.entity';

@Injectable()
export class SlotsmoduleService {
  constructor(
    @InjectRepository(Slot)
    private slotsRepository: Repository<Slot>,
    @InjectRepository(Reservation)
    private reservationsRepository: Repository<Reservation>,
  ) {}

  async findAllAvailable(): Promise<Slot[]> {
    return this.slotsRepository.find({ where: { available: true } });
  }

  async bookSlot(slotId: number, userId: number): Promise<Reservation> {
    const slot = await this.slotsRepository.findOne({ where: { id: slotId } });
    if (slot && slot.available) {
      slot.available = false;
      await this.slotsRepository.save(slot);
      const reservation = new Reservation();
      reservation.slot = slot;
      reservation.user_id = userId;
      reservation.status = 'pending';
      return this.reservationsRepository.save(reservation);
    } else {
      throw new Error('Slot not available');
    }
  }
}
