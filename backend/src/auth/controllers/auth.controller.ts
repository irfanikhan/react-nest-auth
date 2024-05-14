import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from 'shared/dtos/create-user.dto';
import { Serialize } from 'interceptors/serialize.interceptor';
import { UserDto } from 'shared/dtos/user.dto';
import { AuthGuard } from 'guards/auth.guard';
import { User } from 'decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() authUser: CreateUserDto) {
    return this.authService.signUp(authUser);
  }

  @Post('login')
  async signIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.authService.validateUser(email, password);

    if (!user) throw new UnauthorizedException('Invalid Credentials');

    return this.authService.login(user);
  }

  @Serialize(UserDto)
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@User() user: { email: string; id: string }) {
    return this.authService.getProfile(user.id);
  }
}
