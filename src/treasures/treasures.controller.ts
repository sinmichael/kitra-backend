import { Controller, Query, Get, UseGuards } from '@nestjs/common';
import { TreasuresService } from './treasures.service';
import { Treasure } from './entities/treasure.entity';
import { FindNearbyTreasuresDto } from './dto/find-nearby-treasures.dto';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('treasures')
@ApiBearerAuth() // Adds Bearer token authentication to Swagger UI
@Controller('treasures')
@UseGuards(AuthGuard('jwt'))
export class TreasuresController {
  constructor(private readonly treasuresService: TreasuresService) {}

  @Get('/')
  @ApiOperation({ summary: 'Find nearby treasures' })
  @ApiResponse({
    status: 200,
    description: 'List of nearby treasures found within the specified distance',
    type: [Treasure],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findNearbyTreasures(
    @Query() findNearbyTreasuresDto: FindNearbyTreasuresDto,
  ): Promise<Treasure[]> {
    return this.treasuresService.findNearbyTreasures(findNearbyTreasuresDto);
  }
}
