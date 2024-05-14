import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return false;
    }

    const [, token] = authorization.split(' ');

    if (!token) return false;

    try {
      const decoded = await this.jwtService.verifyAsync(token);
      request.user = decoded;

      return true;
    } catch (err) {
      return false;
    }
  }
}
