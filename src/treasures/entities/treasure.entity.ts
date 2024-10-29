import { MoneyValue } from 'src/money-values/entities/money-value.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('treasures')
export class Treasure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('double', { precision: 10, scale: 8 })
  latitude: number;

  @Column('double', { precision: 11, scale: 8 })
  longitude: number;

  @Column('varchar', { length: 255 })
  name: string;

  @OneToMany(() => MoneyValue, (moneyValue) => moneyValue.treasure)
  moneyValues: MoneyValue[];
}
