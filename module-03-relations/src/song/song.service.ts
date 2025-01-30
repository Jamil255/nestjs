import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
import { Song } from './song.entity';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { query } from 'express';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}
  private readonly songs = [];
  create(songDTO: CreateSongDTO): Promise<Song> {
    const song = new Song();
    song.title = songDTO.title;
    song.artist = songDTO.artist;
    song.duration = songDTO.duration;
    song.layrics = songDTO.layrics;
    song.releasedDate = songDTO.releasedDate;
    return this.songRepository.save(song);
  }
  findAll(): Promise<Song[]> {
    return this.songRepository.find();
    // error while data fetching on db
    // throw new Error('error in db');
    // return this.songs;
  }
  findOne(id: number): Promise<Song> {
    return this.songRepository.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    await this.songRepository.delete({ id });
  }
  update(id: number, recordToUpload: UpdateSongDTO): Promise<UpdateResult> {
    return this.songRepository.update(id, recordToUpload);
  }
  async paginate(options: IPaginationOptions): Promise<Pagination<Song>> {
    const queryBuilder = this.songRepository.createQueryBuilder('c');
    queryBuilder.orderBy('c.releasedDate', 'DESC');
    return paginate<Song>(queryBuilder, options);
  }
}
