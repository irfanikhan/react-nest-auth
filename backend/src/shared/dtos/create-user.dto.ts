import { IsEmail, IsString, Validate } from 'class-validator';
import { PasswordValidator } from '../validators/password.validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsString()
  @Validate(PasswordValidator)
  password: string;
}
