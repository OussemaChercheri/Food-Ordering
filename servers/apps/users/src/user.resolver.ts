import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RegisterDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { RegisterResponse } from './types/user.types';
import { UsersService } from './users.service';

@Resolver('User')
// @UserFilters
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
  ): Promise<RegisterResponse> {
    if (!registerDto.email || !registerDto.password || !registerDto.name) {
      throw new BadRequestException('Please provide all required fields');
    }

    const user = await this.usersService.register(registerDto);
    return { user };
  }

  @Query(() => [User])
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
