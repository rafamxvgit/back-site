import { Injectable } from '@nestjs/common';
import { CreateModTeseDto } from './dto/create-mod-tese.dto';
import { UpdateModTeseDto } from './dto/update-mod-tese.dto';

@Injectable()
export class ModTeseService {
  create(createModTeseDto: CreateModTeseDto) {
    return 'This action adds a new modTese';
  }

  findAll() {
    return `This action returns all modTese`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modTese`;
  }

  update(id: number, updateModTeseDto: UpdateModTeseDto) {
    return `This action updates a #${id} modTese`;
  }

  remove(id: number) {
    return `This action removes a #${id} modTese`;
  }
}
