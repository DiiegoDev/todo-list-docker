import { Injectable } from "@nestjs/common";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isCompleted: boolean;
}

@Injectable()
export class TodoRepository {
  private todos: Todo[] = [];

  createTodo(todo: Todo) {
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }

  updateTodo(id: string, isCompleted: boolean) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);

    if(todoIndex !== -1) {
      this.todos[todoIndex].isCompleted = isCompleted
    }
  }

}