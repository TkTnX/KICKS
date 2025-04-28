import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  async getMe(@Req() req: Request) {
    const token = req.cookies.refreshToken;

    if (!token) return null;

    return await this.userService.getMe(token ?? '');
  }
}
