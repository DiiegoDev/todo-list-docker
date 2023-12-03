import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("list-all")
  findAll() {
    return this.appService.findAll();
  }

  @Post('create')
  create(@Body() todo: TodoDto) {
    this.appService.createTodo(todo);
  }

}
