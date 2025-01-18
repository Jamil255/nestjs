import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { connection } from 'src/common/constant/connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './song.entity';
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
  imports: [TypeOrmModule.forFeature([Song])],
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
