import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Constant } from './entities/constant.entity';
import { CreateConstantDto } from './dto/create-constant.dto';
import { IsUUIDDto } from './dto/isUUID.dto';
import { UpdateConstantDto } from './dto/update-constant.dto';

@Injectable()
export class ConstantsService {
  constructor(
    @InjectRepository(Constant)
    private constantsRepository: Repository<Constant>,
  ) {}

  async create(createConstantDto: CreateConstantDto) {
    const foundConstant = await this.constantsRepository.findOne({
      where: {
        name: createConstantDto.name,
        currency: createConstantDto.currency,
        value: createConstantDto.value,
      },
    });

    if (!foundConstant) {
      const newConstant: Constant = await this.constantsRepository.create({
        ...createConstantDto,
      });
      return await this.constantsRepository.save(newConstant);
    }

    throw Error('Constant already exists');
  }

  async findAll() {
    return await this.constantsRepository
      .createQueryBuilder('constant')
      .getMany();
  }

  async findOne(id: IsUUIDDto) {
    const foundConstant = await this.constantsRepository
      .createQueryBuilder('constant')
      .select('constant.id')
      .where('constant.id = :id', { id })
      .getRawOne();

    if (!foundConstant) {
      throw new Error('Constant not found');
    } else {
      return foundConstant;
    }
  }

  async update(id: IsUUIDDto, updateConstantDto: UpdateConstantDto) {
    const result: UpdateResult = await this.constantsRepository.update(
      id,
      updateConstantDto,
    );

    return result;
  }

  async remove(id: string) {
    return await this.constantsRepository.delete(id);
  }
}
