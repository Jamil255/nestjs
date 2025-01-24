import { Inject, Injectable, Post } from '@nestjs/common';
import { Connection } from 'src/common/constants/connection';

@Injectable()
export class SongService {
  private readonly song = [];
  constructor(
    @Inject('CONNECTION')
    connection: Connection,
  ) {
    //   console.log(connection);
  }
  create(song) {
    this.song.push(song);
    return this.song;
  }
  getSong() {
    return this.song;
  }
  put() {
    return 'This will update a song';
  }
  delete() {
    return 'This will delete a song';
  }
}
