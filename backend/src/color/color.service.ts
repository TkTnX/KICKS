import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateColorDto } from './dto/create-color.dto';
import { EditColorDto } from './dto/edit-color.dto';

@Injectable()
export class ColorService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAll() {
    const colors = await this.prismaService.color.findMany();
    return colors;
  }

  async getColorById(colorId: string) {
    const color = await this.prismaService.color.findUnique({
      where: { id: colorId },
    });

    if (!color) throw new NotFoundException('Color is not found');

    return color;
  }

  async createColor(body: CreateColorDto) {
    const color = await this.prismaService.color.create({ data: body });
    return color;
  }

  async editColor(colorId: string, body: EditColorDto) {
    const color = await this.getColorById(colorId);

    const updatedColor = await this.prismaService.color.update({
      where: { id: colorId },
      data: {
        name: body.name || color.name,
        value: body.value || color.value,
      },
    });

    return updatedColor;
  }

  async deleteColor(colorId: string) {
    const deletedColor = await this.prismaService.color.delete({
      where: { id: colorId },
    });
    return deletedColor;
  }
}
