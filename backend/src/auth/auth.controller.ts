import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Request, Response } from 'express';
import { Authorization } from './decorators/authorization.decorator';
import { Authorized } from './decorators/authorized.decorator';
import { User } from 'generated/prisma';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() dto: LoginDto, @Res() res: Response) {
    const accessToken = await this.authService.signIn(dto, res);
    return res.json(accessToken);
  }

  @Post('register')
  async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.register(dto, res);
  }

  @Get('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    const data = await this.authService.refresh(req, res);
    return res.json(data);
  }

  @Authorization()
  @Get('profile')
  getProfile(@Authorized() user: User) {
    return user;
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    return await this.authService.logout(res);
  }
}
