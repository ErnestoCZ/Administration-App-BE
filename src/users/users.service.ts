import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const foundUser: User[] = await this.usersRepository.find({
      where: {
        email: createUserDto.email,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
      },
    });

    if (foundUser.length > 0) {
      throw new BadRequestException('User already exists');
    }
    if (foundUser.length === 0) {
      const user = this.usersRepository.create(createUserDto);
      return this.usersRepository.save(user);
    }
  }

  async getAllUsers() {
    const user: User[] = await this.usersRepository.find();
    return user;
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne({
      where: { id: id },
    });

    if (user) {
      console.log(user);
      return user;
    } else {
      throw new Error('User not found');
    }
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id: id } });

    if (!user) {
      throw new NotFoundException('user not found');
    }
    return await this.usersRepository.update({ id: id }, updateUserDto);
  }

  async removeUser(id: string) {
    return await this.usersRepository.delete({ id: id });
  }
}
