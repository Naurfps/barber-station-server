import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/createServicesDto';
import { UpdateServiceDto } from './dto/updateServicesDto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BarberService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    return await this.prisma.services.create({ data: createServiceDto });
  }

  async findAll() {
    return await this.prisma.services.findMany();
  }

  async findOne(id: number) {
    const service = await this.prisma.services.findUnique({ where: { id } });
    if (!service) throw new NotFoundException(`Serviço com ID ${id} não encontrado`);
    return service;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    return await this.prisma.services.update({
      where: { id },
      data: updateServiceDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.services.delete({ where: { id } });
  }
}