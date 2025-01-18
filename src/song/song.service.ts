import { Injectable, Scope } from '@nestjs/common';
import { title } from 'process';

@Injectable()
export class SongService {
  private readonly songs = [];
  create(song) {
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    // error while data fetching on db
    // throw new Error('error in db');
    return this.songs;
  }
}
