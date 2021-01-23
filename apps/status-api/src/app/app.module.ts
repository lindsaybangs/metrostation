import { HttpModule, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StmService } from './stm.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, StmService],
})
export class AppModule {}
