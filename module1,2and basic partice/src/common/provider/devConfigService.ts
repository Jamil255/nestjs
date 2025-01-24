import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigService {
  DBHost= 'localhost';
  getHost() {
    return this.DBHost;
  }
}
