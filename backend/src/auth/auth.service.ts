import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/prisma.service';
import { JwtPayload } from './interfaces/jwt.interface';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
    private configService: ConfigService,
  ) {}

  // ВХОД
  async signIn(dto: LoginDto, res: Response): Promise<any> {
    const user = await this.usersService.findOne(dto.email);
    const comparePassword = await bcrypt.compare(dto.password, user.password);

    if (!comparePassword) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.auth(res, user.id, user.role);
  }

  // РЕГИСТРАЦИЯ
  async register(dto: RegisterDto, res: Response) {
    const isExists = await this.prismaService.user.findUnique({
      where: { email: dto.email },
    });
    if (isExists) throw new ConflictException('User already exists!');

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const newUser = await this.prismaService.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        name: dto.name,
        gender: dto.gender,
      },
    });

    await this.prismaService.cart.create({
      data: {
        userId: newUser.id,
      },
    });

    return this.auth(res, newUser.id, newUser.role);
  }

  // ГЕНЕРАЦИЯ ТОКЕНОВ
  private generateToken(userId: string, role: string) {
    const payload: JwtPayload = { userId, role };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.configService.getOrThrow<string>('JWT_ACCESS_TOKEN_TTL'),
      secret: this.configService.getOrThrow<string>('JWT_SECRET'),
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: this.configService.getOrThrow<string>('JWT_REFRESH_TOKEN_TTL'),
      secret: this.configService.getOrThrow<string>('JWT_SECRET'),
    });

    return { accessToken, refreshToken };
  }

  // УСТАНОВКА КУКИ
  private setCookie(res: Response, value: string, expires: Date) {
    res.cookie('refreshToken', value, {
      httpOnly: true,
      domain: this.configService.getOrThrow<string>('COOKIE_DOMAIN'),
      expires,
      secure:
        this.configService.getOrThrow<string>('NODE_ENV') === 'production',
      sameSite:
        this.configService.getOrThrow<string>('NODE_ENV') === 'production'
          ? 'none'
          : 'lax',
    });
  }

  // ПРОВЕРКА АВТОРИЗАЦИИ
  private auth(res: Response, userId: string, role: string) {
    const { accessToken, refreshToken } = this.generateToken(userId, role);

    this.setCookie(
      res,
      refreshToken,
      new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    );

    return { accessToken };
  }

  // ОБНАВЛЕНИЕ ТОКЕНА
  async refresh(req: Request, res: Response) {
    const refreshToken = req.cookies['refreshToken'];
    if (!refreshToken) throw new UnauthorizedException('No refresh token!');

    const payload: JwtPayload = await this.jwtService.verifyAsync(
      refreshToken,
      {
        secret: this.configService.getOrThrow<string>('JWT_SECRET'),
      },
    );

    if (payload) {
      const user = await this.prismaService.user.findUnique({
        where: { id: payload.userId },
        select: { id: true, role: true },
      });

      if (!user) throw new NotFoundException('User not found');

      return this.auth(res, user.id, user.role);
    }
  }

  // ВЫХОД
  async logout(res: Response) {
    this.setCookie(res, 'refreshToken', new Date(0));
  }

  // ВАЛИДАЦИЯ ТОКЕНА
  async validate(userId: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });
    if (!user) throw new NotFoundException('User not found!');
    return user;
  }

  // ВХОД ГУГЛ
  googleLogin(req) {
    if (!req.user) {
      return 'No user from Google';
    }

    return {
      message: 'User information from Google',
      user: req.user,
    };
  }

  async githubLogin(profile: any, res: Response) {
    const email = profile.email;
    if (!email) throw new UnauthorizedException('Email not found in Github');

    let user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await this.prismaService.user.create({
        data: {
          email,
          name: profile.displayName || profile.username || 'Github User',
          password: '',
          image: profile.avatar || '',
        },
      });

      await this.prismaService.cart.create({
        data: {
          userId: user.id,
        },
      });
    }
    return this.auth(res, user.id, user.role);
  }
}
