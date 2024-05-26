import { PartialType } from '@nestjs/mapped-types';
import { CreateVagnDto } from './create-vagn.dto';

export class UpdateVagnDto extends PartialType(CreateVagnDto) {}
