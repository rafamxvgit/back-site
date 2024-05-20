import { PartialType } from '@nestjs/mapped-types';
import { CreateModTeseDto } from './create-mod-tese.dto';

export class UpdateModTeseDto extends PartialType(CreateModTeseDto) {}
