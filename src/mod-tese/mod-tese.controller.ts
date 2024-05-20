import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModTeseService } from './mod-tese.service';
import { CreateModTeseDto } from './dto/create-mod-tese.dto';
import { UpdateModTeseDto } from './dto/update-mod-tese.dto';

@Controller('mod-tese')
export class ModTeseController {
  constructor(private readonly modTeseService: ModTeseService) {}

  @Post()
  create(@Body() createModTeseDto: CreateModTeseDto) {
    return this.modTeseService.create(createModTeseDto);
  }

  @Get()
  findAll() {
    return this.modTeseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modTeseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModTeseDto: UpdateModTeseDto) {
    return this.modTeseService.update(+id, updateModTeseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modTeseService.remove(+id);
  }
}
