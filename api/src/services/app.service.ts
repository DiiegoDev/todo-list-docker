import {randomUUID} from 'node:crypto'
import { Injectable } from '@nestjs/common';
import { TodoRepository } from 'src/repositories/todo-repository';
import { TodoDto } from 'src/dto/todo-dto';

@Injectable()
export class AppService {
  constructor(private readonly todoRepository: TodoRepository) {}


  async findAll() {
    return await this.todoRepository.findAll();
  }

  createTodo(todo: TodoDto) {
    const id = randomUUID();
    const data = {id, ...todo};

    this.todoRepository.createTodo(data);
  }

  updateTodo(id: string, isCompleted: boolean) {
    this.todoRepository.updateTodo(id, isCompleted)
  }

  deleteTodo(id: string) {
    this.todoRepository.deleteTodo(id);
  }
}
