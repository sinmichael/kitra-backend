import { IsOptional, IsIn, IsNumberString, Matches } from 'class-validator';
import { IsPrizeValue } from 'src/is-prize-value';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FindNearbyTreasuresDto {
  @ApiProperty({
    description: 'Latitude for the search location',
    example: 14.552036595352455,
    type: Number,
  })
  @IsNumberString()
  latitude: number;

  @ApiProperty({
    description: 'Longitude for the search location',
    example: 121.01696118771324,
    type: Number,
  })
  @IsNumberString()
  longitude: number;

  @ApiProperty({
    description: 'Search radius in kilometers (1 or 10 only)',
    example: '10',
    type: String,
    enum: ['1', '10'],
  })
  @IsNumberString()
  @IsIn(['1', '10'], { message: 'Distance must be either 1 or 10 kilometers' })
  distance: number;

  @ApiPropertyOptional({
    description:
      'Minimum prize value to filter treasures (whole numbers from 10 to 30)',
    example: 20,
    type: Number,
  })
  @IsOptional()
  @IsNumberString()
  @Matches(/^\d+$/, { message: 'prizeValue must be a whole number' })
  @IsPrizeValue()
  prizeValue?: number;
}
