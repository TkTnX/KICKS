import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ColorService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAll() {
    const colors = await this.prismaService.color.findMany();
    return colors;
  }
}
