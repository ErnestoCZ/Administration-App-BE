import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Param,
  Version,
} from '@nestjs/common';
import { ConstantsService } from './constants.service';
import { CreateConstantDto } from './dto/create-constant.dto';
import { IsUUIDDto } from './dto/isUUID.dto';
import { UpdateConstantDto } from './dto/update-constant.dto';

@Controller('constants')
export class ConstantsController {
  constructor(private readonly constantsService: ConstantsService) {}

  @Version('1')
  @Post()
  create(@Body() createConstantDto: CreateConstantDto) {
    return this.constantsService.create(createConstantDto);
  }

  @Version('1')
  @Get()
  findAll() {
    return this.constantsService.findAll();
  }

  @Version('1')
  @Get(':id')
  findOne(@Param('id') id: IsUUIDDto) {
    return this.constantsService.findOne(id);
  }

  @Version('1')
  @Patch(':id')
  update(
    @Param('id') id: IsUUIDDto,
    @Body() updateConstantDto: UpdateConstantDto,
  ) {
    return this.constantsService.update(id, updateConstantDto);
  }

  @Version('1')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.constantsService.remove(id);
  }
}
