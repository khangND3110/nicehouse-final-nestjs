

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/constants/app.constants';

export enum RoleType {
    USER = 1,
}

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<RoleType[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );
        if (!requiredRoles) {
            return true;
        }
        const handle = (): boolean => {
            const { user } = context.switchToHttp().getRequest();
            console.log(user);
            return requiredRoles.some((role) => [user.role]?.includes(role));
        };
        return handle();
    }
}