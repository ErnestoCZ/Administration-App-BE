import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Constant } from './entities/constant.entity';
import { CreateConstantDto } from './dto/create-constant.dto';

@Injectable()
export class ConstantsService {
  constructor(
    @InjectRepository(Constant)
    private constantsRepository: Repository<Constant>,
  ) {}

  create(createConstantDto: CreateConstantDto) {
    return 'This action adds a new constant';
  }

  findAll() {
    return `This action returns all constants`;
  }

  findOne() {
    return '';
  }

  update() {
    return;
  }

  remove() {
    return;
  }
}
