import { Inject, Injectable } from '@nestjs/common';
import { devConfigService } from './common/provider/devConfigService';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: devConfigService,
    @Inject('config')
    private config: { port: string },
  ) {
    console.log(this.config.port);
  }
  getHello(): string {
    return `this is dependeciy inject response ${this.devConfigService.getDBHost()}`;
  }
}
