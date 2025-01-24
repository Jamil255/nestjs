import { Injectable } from '@nestjs/common';
import { DevConfigService } from './common/provider/DevConfigService';

@Injectable()
export class AppService {
    constructor(private devConfigService: DevConfigService) {
    }
  getHello(): string {
    return `Hello World! ${this.devConfigService.DBHost}`;
  }
}
