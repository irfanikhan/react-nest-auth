import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'shared/dtos/create-user.dto';
import { UserDocument } from 'users/schemas/user.schema';
import { UsersService } from 'users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(user: CreateUserDto) {
    const existingUser = await this.userService.findByEmail(user.email);

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const createdUser = await this.userService.create(user);

    return this.login(createdUser);
  }

  async login(authUser: UserDocument) {
    if (!authUser) throw new UnauthorizedException('Invalid credentials');

    // const payload = { email: authUser.email, sub: authUser.id };
    const payload = { email: authUser.email, id: authUser.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<UserDocument> {
    const user = await this.userService.findByEmail(email);

    if (!user) return null;

    const isPasswordValid = await this.userService.validatePassword(
      user,
      password,
    );

    if (!isPasswordValid) return null;

    return user;
  }

  getProfile(userId: string) {
    return this.userService.findById(userId);
  }
}
