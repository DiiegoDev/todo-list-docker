import {randomUUID} from 'node:crypto'
import { Injectable } from '@nestjs/common';
import { TodoRepository } from 'src/repositories/todo-repository';

@Injectable()
export class AppService {
  constructor(private readonly todoRepository: TodoRepository) {}


  findAll() {
    return this.todoRepository.findAll();
  }

  createTodo(todo: TodoDto) {
    const id = randomUUID();
    const data = {id, ...todo};

    this.todoRepository.createTodo(data);
  }
}
