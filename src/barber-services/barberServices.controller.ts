import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CreateServiceDto } from './dto/createServicesDto';
import { UpdateServiceDto } from './dto/updateServicesDto';
import { BarberService } from './barberServices.service';

@Controller('services')
export class BarberServicesController {
  constructor(private readonly barberServices: BarberService) {}

  @Post('create')
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.barberServices.create(createServiceDto);
  }

  @Get()
  findAll() {
    return this.barberServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.barberServices.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateServiceDto: UpdateServiceDto) {
    return this.barberServices.update(+id, updateServiceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.barberServices.remove(Number(id));
  }
}