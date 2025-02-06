import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Slot } from 'src/slotsmodule/slotsmodule.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Slot, (slot) => slot.reservations)
  slot: Slot;

  @Column()
  user_id: number;

  @Column({ default: 'pending' })
  status: string;
}
