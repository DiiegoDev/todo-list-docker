export class TodoRepository {
  private todos = [];

  findAll() {
    return this.todos;
  }

}