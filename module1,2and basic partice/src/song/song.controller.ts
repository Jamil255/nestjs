import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { createSongDto } from './dto/create-song-dto';
import { SongService } from './song.service';

@Controller('song')
export class SongController {
  constructor(private songService: SongService) {}
  @Post()
  createSong(@Body() createSongDto: createSongDto) {
    return this.songService.create(createSongDto);
  }
  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.songService.getSong();
    } catch (e) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: e },
      );
    }
  }
  @Put(':id')
  put(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.songService.put();
  }
  @Delete()
  delete() {
    return this.songService.delete();
  }
}
