import { Module } from '@nestjs/common';
import { TreasuresService } from './treasures.service';
import { TreasuresController } from './treasures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Treasure } from './entities/treasure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Treasure])],
  controllers: [TreasuresController],
  providers: [TreasuresService],
})
export class TreasuresModule {}
