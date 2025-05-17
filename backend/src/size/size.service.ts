import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SizeService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAll() {
    const sizes = await this.prismaService.size.findMany({
      orderBy: { size: 'asc' },
    });
    return sizes;
  }

  private async getOneBySize(size: string) {
    const isExist = await this.prismaService.size.findUnique({
      where: {
        size,
      },
    });

    return isExist;
  }

  async create(size: string) {
    const isExist = await this.getOneBySize(size);

    if (isExist) throw new BadGatewayException('Size already exists');

    const newSize = await this.prismaService.size.create({
      data: { size },
    });
    return newSize;
  }

  async delete(id: string) {
    const deleted = await this.prismaService.size.delete({ where: { id } });
    return deleted;
  }
}
