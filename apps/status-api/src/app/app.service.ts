import { Injectable } from '@nestjs/common';
import { StmService } from './stm.service';

@Injectable()
export class AppService {
  constructor(private readonly stm: StmService) {}

  getData(): { message: string } {
    return { message: 'Welcome to status-api!' };
  }

  getHardcodedStmData(): any {
    return this.stm.getData();
  }
}
