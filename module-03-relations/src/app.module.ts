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
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Song } from './song/song.entity';

const devConfig = {
  port: 300,
};
const proConfig = {
  port: 400,
};
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'nestjs',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '112233',
      synchronize: true,
      entities: [Song],
    }),
    SongModule,
  ],
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
  constructor(private dataSource: DataSource) {
    console.log(dataSource.driver.database);
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SongController);
    // consumer.apply(LoggerMiddleware).forRoutes('song'); option#2
    // consumer.apply(LoggerMiddleware).forRoutes({path:'song',method:RequestMethod.POST}) option#3
  }
}
