import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';

@Module({
  controllers: [ColorController],
  providers: [ColorService, PrismaService],
})
export class ColorModule {}
