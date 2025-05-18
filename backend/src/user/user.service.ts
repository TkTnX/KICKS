import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interfaces/jwt.interface';
import { EditUserDto } from './dto/edit-user.dto';
import { User } from 'generated/prisma';
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
        orders: true,
        reviews: true,
      },
    });

    if (!user) return null;
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async edit(dto: EditUserDto, user: User) {
    const findUser = await this.findOne(user.email);

    await this.prisma.user.update({
      where: { id: findUser.id },
      data: {
        name: dto.name || findUser.name,
        email: dto.email || findUser.email,
        gender: dto.gender || findUser.gender,
        image: dto.image || findUser.image,
      },
    });

    return true;
  }
}
