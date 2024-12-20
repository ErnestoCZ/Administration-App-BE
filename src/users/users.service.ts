import { Injectable } from '@nestjs/common';
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
      return 'User already exists';
    }
    if (foundUser.length === 0) {
      const user = this.usersRepository.create(createUserDto);
      return this.usersRepository.save(user);
    }
  }

  async findAll() {
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const user = this.usersRepository.findOne({
      where: { id: id },
    });

    if (user) {
      return await this.usersRepository.delete(id);
    } else {
      throw new Error('User not found');
    }

    return `This action removes a #${id} user`;
  }
}
