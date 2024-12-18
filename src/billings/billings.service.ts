import { Injectable } from '@nestjs/common';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Billing } from './entities/billing.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BillingsService {
  constructor(
    @InjectRepository(Billing) private billingsRepository: Repository<Billing>,
  ) {}
  async create(createBillingDto: CreateBillingDto) {
    const foundBilling: Billing[] = await this.billingsRepository.find({
      where: {
        dateFrom: createBillingDto.dateFrom,
      },
    });

    if (foundBilling.length > 0) {
      throw new Error('Billing already exists');
    }

    if (foundBilling.length === 0) {
      const newBilling: Billing =
        this.billingsRepository.create(createBillingDto);
      const res = await this.billingsRepository.save(newBilling);
      return res;
    }
  }

  async findAll() {
    return await this.billingsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} billing`;
  }

  update(id: number, updateBillingDto: UpdateBillingDto) {
    return `This action updates a #${id} billing`;
  }

  remove(id: number) {
    return `This action removes a #${id} billing`;
  }
}
