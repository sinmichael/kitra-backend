import { Treasure } from 'src/treasures/entities/treasure.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('money_values')
export class MoneyValue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Treasure, (treasure) => treasure.id)
  @JoinColumn({ name: 'treasure_id' })
  treasure: Treasure;

  @Column('int')
  amount: number;
}
