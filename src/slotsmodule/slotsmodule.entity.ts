import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Person } from 'src/people/Entities/person.entity';
import { Reservation } from 'src/reservationmodule/reservationmodule.entity';

@Entity()
export class Slot {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Person, (person) => person.slots)
  carpenter: Person;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column({ default: true })
  available: boolean;

  @OneToMany(() => Reservation, (reservation) => reservation.slot)
  reservations: Reservation[];
}
