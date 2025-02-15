import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Billing } from './entities/billing.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class BillingsService {
  constructor(
    @InjectRepository(Billing) private billingsRepository: Repository<Billing>,
    @Inject(UsersService) private userService: UsersService,
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

  findOne(id: string) {
    return `This action returns a ${id} billing`;
  }

  update(id: number, updateBillingDto: UpdateBillingDto) {
    return `This action updates a #${id} billing`;
  }

  remove(id: number) {
    return `This action removes a #${id} billing`;
  }

  async addUser(id: string, userId: string) {
    const userQuery = this.userService.findOne(userId);
    const billingQuery = this.billingsRepository
      .createQueryBuilder('billings')
      .where('billings.id = :id', { id: id })
      .leftJoinAndSelect('billings.user', 'user')
      .getOne();

    const [billing, user] = await Promise.all([billingQuery, userQuery]);

    if (!billing) throw new NotFoundException('Billing not found');
    if (!user) throw new NotFoundException('User not found');

    return await this.billingsRepository.save(billing);
  }

  async removeUser(id: string, userId: string) {
    const userQuery = this.userService.findOne(userId);
    const billingQuery = this.billingsRepository
      .createQueryBuilder('billings')
      .where('billings.id = :id', { id: id })
      .leftJoinAndSelect('billings.user', 'user')
      .getOne();

    const [billing, user] = await Promise.all([billingQuery, userQuery]);

    if (!billing) throw new NotFoundException('Billing not found');
    if (!user) throw new NotFoundException('User not found');

    return await this.billingsRepository.save(billing);
  }
}
