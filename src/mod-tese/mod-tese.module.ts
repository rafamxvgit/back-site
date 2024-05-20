import { Module } from '@nestjs/common';
import { ModTeseService } from './mod-tese.service';
import { ModTeseController } from './mod-tese.controller';

@Module({
  controllers: [ModTeseController],
  providers: [ModTeseService],
})
export class ModTeseModule {}
