import { Injectable } from '@nestjs/common';
import { TodoRepository } from 'src/repositories/todo-repository';

@Injectable()
export class AppService {
  constructor(private readonly todoRepository: TodoRepository) {}


  findAll() {
    return this.todoRepository.findAll();
  }
}
