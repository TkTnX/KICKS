import { Body, Controller, Get, Patch, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { EditUserDto } from './dto/edit-user.dto';
import { Authorization } from 'src/auth/decorators/authorization.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import { User } from 'generated/prisma';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  async getMe(@Req() req: Request) {
    const token = req.cookies.refreshToken;

    if (!token) return null;

    return await this.userService.getMe(token ?? '');
  }

  @Authorization()
  @Patch()
  async edit(@Body() dto: EditUserDto, @Authorized() user: User) {
    return await this.userService.edit(dto, user)
  }
}
