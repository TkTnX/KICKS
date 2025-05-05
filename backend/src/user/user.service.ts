import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interfaces/jwt.interface';
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async findOne(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new NotFoundException('User is not found!');
    return user;
  }

  async getMe(token: string) {
    const decoded: JwtPayload = await this.jwtService.verifyAsync(token);

    const user = await this.prisma.user.findUnique({
      where: { id: decoded.userId },
      include: {
        favoriteItems: true,
      },
    });

    if (!user) return null;
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
