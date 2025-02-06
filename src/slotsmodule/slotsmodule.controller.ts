import { Controller, Get, Post, Body } from '@nestjs/common';
import { SlotsmoduleService } from './slotsmodule.service';

@Controller('slots')
export class slotsmoduleController {
  constructor(private readonly slotsService: SlotsmoduleService) {}

  @Get()
  findall() {
    return this.slotsService.findAllAvailable();
  }

  @Post('book')
  book(@Body() body: { slotId: number; userId: number }) {
    return this.slotsService.bookSlot(body.slotId, body.userId);
  }
}
