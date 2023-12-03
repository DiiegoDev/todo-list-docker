import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("list-all")
  findAll() {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() todo: TodoDto) {
    this.appService.createTodo(todo);
  }
}
