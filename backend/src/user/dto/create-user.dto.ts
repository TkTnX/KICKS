import { IsEmail, IsStrongPassword } from 'class-validator';
import { EGender } from 'generated/prisma';

export class CreateUserDto {
  @IsEmail({}, { message: 'Wrong email' })
  email: string;

  @IsStrongPassword(
    {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    { message: 'Password is too weak' },
  )
  password: string;

  name: string;
  gender: EGender;
}
