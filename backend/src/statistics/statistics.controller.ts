import { Controller, Get, UseGuards } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Role } from 'src/auth/interfaces/roles.interface';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Authorization()
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @Get()
  async getMainStatistics() {
    return this.statisticsService.getMainStatistics();
  }

  @Authorization()
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @Get('monthly')
  async getMonthlyStatistics() {
    return this.statisticsService.getMonthlyStatistics();
  }
}
