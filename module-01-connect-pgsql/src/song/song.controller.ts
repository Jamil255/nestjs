import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constant/connection';
import { Song } from './song.entity';
import { UpdateSongDTO } from './dto/update-song-dto';
import { UpdateResult } from 'typeorm';

@Controller({
  path: 'song',
  scope: Scope.DEFAULT,
})
export class SongController {
  constructor(
    private songService: SongService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {}
  @Post()
  create(@Body() createSongDto: CreateSongDTO): Promise<Song> {
    return this.songService.create(createSongDto);
  }

  @Get()
  findAll(): Promise<Song[]> {
    try {
      return this.songService.findAll();
    } catch (e) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: e },
      );
    }
  }
  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.songService.findOne(id);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return this.songService.remove(id);
    } catch (err) {
      throw new HttpException('server error', HttpStatus.NOT_ACCEPTABLE, {
        cause: err,
      });
    }
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSongDto: UpdateSongDTO,
  ): Promise<UpdateResult> {
      console.log('updateSongDto', updateSongDto)
    return this.songService.update(id, updateSongDto);
  }
}
