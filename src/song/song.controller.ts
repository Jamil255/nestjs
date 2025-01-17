import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongService } from './song.service';

@Controller('song')
export class SongController {
    constructor(private songService: SongService){}
  @Post()
  create() {
    return this.songService.create("b")
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
