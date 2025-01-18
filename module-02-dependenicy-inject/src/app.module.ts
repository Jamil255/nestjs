import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './song/song.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SongController } from './song/song.controller';
import { devConfigService } from './common/provider/devConfigService';
const devConfig = {
  port: 300,
};
const proConfig = {
  port: 400,
};
@Module({
  imports: [SongModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: devConfigService,
      useClass: devConfigService,
    },
    {
      provide: 'config',
      useFactory: () => {
        return process.env.NODE_ENV === 'development' ? devConfig : proConfig;
      },
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SongController);
    // consumer.apply(LoggerMiddleware).forRoutes('song'); option#2
    // consumer.apply(LoggerMiddleware).forRoutes({path:'song',method:RequestMethod.POST}) option#3
  }
}
