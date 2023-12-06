import { Injectable } from "@nestjs/common";
import {PrismaService} from '../prisma.service';
import { TodoDto } from "src/dto/todo-dto";

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

@Injectable()
export class TodoRepository {
  
  constructor(private readonly prisma: PrismaService) {}

  async createTodo(todo: TodoDto) {
    await this.prisma.todo.create({data: todo});
  }

  async findAll(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }

  async updateTodo(id: string, isCompleted: boolean) {
   await this.prisma.todo.update({data: {isCompleted}, where: {id}})
  }


  async deleteTodo(id: string) {
    await this.prisma.todo.delete({where: {id}})
  }
}