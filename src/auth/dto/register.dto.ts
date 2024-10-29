import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({ description: 'User name' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'User age' })
  @IsNotEmpty()
  age: number;

  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User password', minLength: 6 })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
