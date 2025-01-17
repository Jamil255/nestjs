import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('song')
export class SongController {
  constructor(private songService: SongService) {}
  @Post()
  create(@Body() createSongDto: CreateSongDTO) {
    return this.songService.create(createSongDto);
  }
  @Get()
  findAll() {
    return this.songService.findAll();
  }
  @Delete(':id')
  helloFun() {
    return 'delete users';
  }
  @Put(':id')
  update() {
    return 'update user';
  }
}
