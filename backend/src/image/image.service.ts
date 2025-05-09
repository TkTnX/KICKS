import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
@Injectable()
export class ImageService {
  upload(file: Express.Multer.File, folder: string) {
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
    return {
      path: `/uploads/${folder}/${fileName}`,
    };
  }
}
