import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './createServicesDto';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {}