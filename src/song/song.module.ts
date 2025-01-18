import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { connection } from 'src/common/constant/connection';
const mockSongService = {
  findAll() {
    return [
      {
        artist: ['atif', 'arjit'],
        title: 'random song',
      },
    ];
  },
};
@Module({
  controllers: [SongController],
  //   providers: [SongService, { provide: 'CONNECTION', useValue: 'Connection' }],
  providers: [
    SongService,
    //
    //   {
    //     provide: SongService,
    //     useClass: SongService,
    //   },
    // {
    //   provide: SongService,
    //   useValue: mockSongService,
    // },
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongModule {}
