import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservationmodule.entity';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationsRepository: Repository<Reservation>,
  ) {}

  async findAllByUser(userId: number): Promise<Reservation[]> {
    return this.reservationsRepository.find({ where: { user_id: userId } });
  }

  async confirmBooking(bookingId: number): Promise<Reservation> {
    const booking = await this.reservationsRepository.findOne({
      where: { id: bookingId },
    });
    if (booking) {
      booking.status = 'confirmed';
      return this.reservationsRepository.save(booking);
    } else {
      throw new Error('Booking not found');
    }
  }

  async cancelBooking(bookingId: number): Promise<Reservation> {
    const booking = await this.reservationsRepository.findOne({
      where: { id: bookingId },
    });
    if (booking) {
      booking.status = 'canceled';
      return this.reservationsRepository.save(booking);
    } else {
      throw new Error('Booking not found');
    }
  }
}
