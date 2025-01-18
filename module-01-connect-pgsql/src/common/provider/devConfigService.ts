import { Injectable } from '@nestjs/common';

@Injectable()
export class devConfigService {
  private dBHost= 'localhost:smit';
  getDBHost() {
    return this.dBHost;
  }
}
