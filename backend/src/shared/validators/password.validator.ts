import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'password', async: false })
export class PasswordValidator implements ValidatorConstraintInterface {
  validate(password: string): boolean {
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

    return regex.test(password);
  }

  defaultMessage(): string {
    return 'Password must have at least 8 characters, at least 1 letter, at least 1 number, and at least 1 special character';
  }
}
