import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Slot } from 'src/slotsmodule/slotsmodule.entity';

@Entity({ name: 'Persons' })
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToMany(() => Slot, (slot) => slot.carpenter)
  slots: Slot[];
}
