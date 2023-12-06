import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { TodoDto } from 'src/dto/todo-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("list-all")
  async findAll() {
    return await this.appService.findAll();
  }

  @Post('create')
  create(@Body() todo: TodoDto) {
    this.appService.createTodo(todo);
  }

  @Patch('update/:id')
  update(@Body() body: {isCompleted: boolean}, @Param('id') id: string) {
    const {isCompleted} = body;
    this.appService.updateTodo(id, isCompleted);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
   this.appService.deleteTodo(id);
  }
}
