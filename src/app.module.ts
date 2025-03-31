import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaService } from 'prisma/prisma.service';
import { AuthModule } from './user/auth/auth.module';
import { BarberServicesModule } from './barber-services/barberServices.module';

@Module({
  imports: [UserModule, AuthModule, BarberServicesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})

export class AppModule {}