import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { ConstantsService } from './constants.service';
import { CreateConstantDto } from './dto/create-constant.dto';

@Controller('constants')
export class ConstantsController {
  constructor(private readonly constantsService: ConstantsService) {}

  @Post()
  create(@Body() createConstantDto: CreateConstantDto) {
    return console.log(createConstantDto);
  }

  @Get()
  findAll() {
    return 'This action returns all constants';
  }

  @Get(':id')
  findOne() {
    return;
  }

  @Patch(':id')
  update() {
    return;
  }

  @Delete(':id')
  remove() {
    return;
  }
}
