import {
  Controller,
  Delete,
  FileTypeValidator,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @UseInterceptors(FileInterceptor('image'))
  @Post(':folder')
  async createProductUpload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({
            fileType: /\/(jpg|png|jpeg)$/,
          }),
          new MaxFileSizeValidator({
            maxSize: 1000 * 1000 * 10,
            message: 'File must not be more 10 mb',
          }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Param('folder') folder: string,
  ) {
    return this.imageService.createProductUpload(file, folder);
  }
  @UseInterceptors(FileInterceptor('image'))
  @Post(':productId/:folder')
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({
            fileType: /\/(jpg|png|jpeg)$/,
          }),
          new MaxFileSizeValidator({
            maxSize: 1000 * 1000 * 10,
            message: 'File must not be more 10 mb',
          }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Param('productId') productId: string,
    @Param('folder') folder: string,
  ) {
    return this.imageService.upload(file, productId, folder);
  }

  @Delete()
  async deleteFile(@Query('path') path: string) {
    return this.imageService.delete(path);
  }
}
