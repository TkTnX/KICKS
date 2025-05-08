import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SizeService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAll() {
    const sizes = await this.prismaService.size.findMany();
    return sizes;
  }
}
