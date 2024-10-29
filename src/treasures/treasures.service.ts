import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Treasure } from './entities/treasure.entity';
import { FindNearbyTreasuresDto } from './dto/find-nearby-treasures.dto';

@Injectable()
export class TreasuresService {
  constructor(
    @InjectRepository(Treasure)
    private treasureRepository: Repository<Treasure>,
  ) {}

  // TODO: If a treasure has prize value $10, $20, $30. Only the minimum value must be considered.
  async findNearbyTreasures(findNearbyTreasuresDto: FindNearbyTreasuresDto) {
    const { longitude, latitude, distance, prizeValue } =
      findNearbyTreasuresDto;

    // Calculate bounding box coordinates
    // 1 degree is approximately 111.32 km
    // https://stackoverflow.com/questions/7477003/calculating-new-longitude-latitude-from-old-n-meters
    const radiusInDegrees = parseFloat((distance / 111.32).toFixed(8));

    const minLat = parseFloat((latitude - radiusInDegrees).toFixed(8));
    const maxLat = parseFloat((Number(latitude) + radiusInDegrees).toFixed(8));
    const minLon = parseFloat(
      (
        longitude -
        radiusInDegrees / Math.cos(latitude * (Math.PI / 180))
      ).toFixed(8),
    );
    const maxLon = parseFloat(
      (
        Number(longitude) +
        radiusInDegrees / Math.cos(latitude * (Math.PI / 180))
      ).toFixed(8),
    );

    const query = this.treasureRepository
      .createQueryBuilder('treasure')
      .leftJoinAndSelect('treasure.moneyValues', 'money_value')
      .where('treasure.latitude BETWEEN :minLat AND :maxLat', {
        minLat,
        maxLat,
      })
      .andWhere('treasure.longitude BETWEEN :minLon AND :maxLon', {
        minLon,
        maxLon,
      });

    // If prizeValue filter is provided, use it to filter based on money_values
    if (prizeValue) {
      query.andWhere('money_value.amount BETWEEN :minPrize AND :maxPrize', {
        minPrize: Math.max(prizeValue - 10, 0),
        maxPrize: Math.min(prizeValue + 10, 30),
      });
    }

    const treasures = await query.getMany();

    // Further filter by exact distance
    return treasures.filter(
      (treasure) =>
        this.calculateDistance(
          latitude,
          longitude,
          treasure.latitude,
          treasure.longitude,
        ) <= distance,
    );
  }

  private calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number {
    const R = 6371;
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}
