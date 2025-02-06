import { Controller, Get, Post, Param } from '@nestjs/common';
import { ReservationsService } from './reservationmodule.service';

@Controller('bookings')
export class ReservationmoduleController {
  constructor(private readonly reservationService: ReservationsService) {}
  @Get()
  findAllbyUser(@Param('userId') userId: number) {
    return this.reservationService.findAllByUser(userId);
  }

  @Post(':id/confirm')
  confirmBooking(@Param('id') bookingId: number) {
    return this.reservationService.confirmBooking(bookingId);
  }

  @Post(':id/cancel')
  cancelBooking(@Param('id') bookingId: number) {
    return this.reservationService.cancelBooking(bookingId);
  }
}
