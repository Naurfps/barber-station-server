import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BarberServicesController } from './barberServices.controller';
import { BarberService } from './barberServices.service';

@Module({
  controllers: [BarberServicesController],
  providers: [BarberService, PrismaService],
  exports: [BarberService], 
})

export class BarberServicesModule {}