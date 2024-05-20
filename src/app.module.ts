import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModTeseModule } from './mod-tese/mod-tese.module';

@Module({
  imports: [ModTeseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
