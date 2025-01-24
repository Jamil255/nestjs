import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { connection } from 'src/common/constants/connection';
//  value provider
// inject the constants value into the  SongService
const mockSongService = {
  put: () => {
    return 'This is a mock service';
  },
};
@Module({
  imports: [],
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
