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
} from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constant/connection';

@Controller('song')
export class SongController {
  constructor(
    private songService: SongService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
      console.log(this.connection.Db)
  }
  @Post()
  create(@Body() createSongDto: CreateSongDTO) {
    return this.songService.create(createSongDto);
  }

  @Get()
  findAll() {
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
    return `return is id type ${typeof id}`;
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
