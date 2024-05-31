import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly JwtService: JwtService,
    // private readonly prisma
    private readonly ConfigService: ConfigService,
  ) {}

  //register user
  async register(registerDto: RegisterDto) {
    const { email, password, name } = registerDto;
    const user = {
      email,
      password,
      name,
    };
    return user;
  }

  //login service
  async login(loginDto: RegisterDto) {
    const { email, password } = loginDto;
    const user = {
      email,
      password,
    };
    return user;
  }

  // gat all users service
  async getAllUsers() {
    const users = [
      {
        id: '1234',
        name: 'John Doe',
        email: 'john@email.com',
        password: 'password',
      },
    ];
    return users;
  }
}
