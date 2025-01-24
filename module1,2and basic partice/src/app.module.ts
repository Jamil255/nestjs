import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongController } from './song/song.controller';
import { SongService } from './song/song.service';
import { SongModule } from './song/song.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { DevConfigService } from './common/provider/DevConfigService';

@Module({
  imports: [SongModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: DevConfigService,
      useClass: DevConfigService,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SongController);
  }
}
