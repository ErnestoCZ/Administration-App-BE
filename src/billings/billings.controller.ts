import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { BillingsService } from './billings.service';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { LoggingInterceptor } from 'src/Interceptors/logging.interceptor';

@UseInterceptors(new LoggingInterceptor())
@Controller('billings')
export class BillingsController {
  constructor(private readonly billingsService: BillingsService) {}

  @Post()
  create(@Body() createBillingDto: CreateBillingDto) {
    return this.billingsService.create(createBillingDto);
  }

  @Get()
  findAll() {
    return this.billingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBillingDto: UpdateBillingDto) {
    return this.billingsService.update(+id, updateBillingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billingsService.remove(+id);
  }
  @Post(':id/addUser') //TODO body needs a DTO
  addUser(@Param('id') id: string, @Body() body: { userId: string }) {
    return this.billingsService.addUser(id, body.userId);
  }

  @Delete(':id/removeUser') //TODO body needs a DTO
  removeUser(@Param('id') id: string, @Body() body: { userId: string }) {
    return this.billingsService.removeUser(id, body.userId);
  }
}
