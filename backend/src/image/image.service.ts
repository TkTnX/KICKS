import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class ImageService {
  constructor(private readonly prismaService: PrismaService) {}
  async upload(file: Express.Multer.File, productId: string, folder: string) {
    const uploadDir = path.join(__dirname, '..', '..', 'uploads');
    const folderDir = path.join(uploadDir, folder);
    if (!fs.existsSync(folderDir)) {
      fs.mkdirSync(folderDir, { recursive: true });
    }

    const filePath = path.join(
      uploadDir,
      folder,
      `${crypto.randomUUID()}-${file.originalname}`,
    );

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const fileName = filePath.split(`\\`)[filePath.split(`\\`).length - 1];

    fs.writeFileSync(filePath, file.buffer);

    await this.prismaService.product.update({
      where: {
        id: productId,
      },
      data: {
        images: {
          push: `/uploads/${folder}/${fileName}`,
        },
      },
    });

    return { path: `/uploads/${folder}/${fileName}` };
  }

  async delete(filePath: string) {
    const uploadDir = path.join(__dirname, '..', '..', 'uploads');
    const fullPath = path.join(uploadDir, filePath.replace('/uploads/', ''));
    if (!fs.existsSync(fullPath)) {
      throw new Error('File is not found');
    }

    fs.unlinkSync(fullPath);

    const productsWithImage = await this.prismaService.product.findMany({
      where: {
        images: {
          has: filePath,
        },
      },
      select: {
        id: true,
        images: true,
      },
    });

    const updatedProducts = productsWithImage.map((product) => ({
      id: product.id,
      images: product.images.filter((image) => image !== filePath),
    }));

    await Promise.all(
      updatedProducts.map((product) =>
        this.prismaService.product.update({
          where: { id: product.id },
          data: { images: product.images },
        }),
      ),
    );

    return { message: 'Deleted!' };
  }
}
