import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection } from 'src/common/constants/connection';
import { Song } from './song.entity';
import { Repository } from 'typeorm';
import { createSongDto } from './dto/create-song-dto';

@Injectable()
export class SongService {
  private readonly song = [];
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {
    //   console.log(connection);
  }
  create(songDTO: createSongDto): Promise<Song> {
      const song = new Song();
      song.title= songDTO.title
      song.artist=songDTO.artist
      song.duration= songDTO.duration
      song.releasedDate = songDTO.releasedDate
      song.layrics = songDTO.layrics

      return this.songRepository.save(song);
  }
  getSong() : Promise<Song[]> {
    return this.songRepository.find();
  }
  put() {
    return 'This will update a song';
  }
  delete() {
    return 'This will delete a song';
  }
}
