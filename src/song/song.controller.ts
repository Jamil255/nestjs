import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('song')
export class SongController {
  @Post()
  create(@Body() createUserDto: any) {
    return `User created with the following data: ${JSON.stringify(createUserDto)}`;
  }
  @Get()
  findAll() {
    return 'hello world from nest js server';
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
