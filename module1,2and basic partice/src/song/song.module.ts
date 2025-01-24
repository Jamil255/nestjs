import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { connection } from 'src/common/constants/connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './song.entity';
//  value provider
// inject the constants value into the  SongService
const mockSongService = {
  put: () => {
    return 'This is a mock service';
  },
};
@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [SongController],
  providers: [
    SongService,
    // standard provider
    //   {
    //       provide: SongService,
    //      useClass: SongService
    //  }
    //   value provider
    // {
    //   provide: SongService,
    //   useValue: mockSongService,
    // },
    {
      provide: 'CONNECTION',
      useValue: connection,
      },
      
      //   class provider 
      
  ],
})
export class SongModule {}
