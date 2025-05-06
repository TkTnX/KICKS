import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../interfaces/roles.interface';
import { ROLES_KEY } from '../decorators/roles.decorator';

// TODO: Доделать проверку по ролям, чтобы некоторые действия мог делать только админ

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    console.log({ user, requiredRoles });
    return requiredRoles.some((role) => user.role === role);
  }
}
