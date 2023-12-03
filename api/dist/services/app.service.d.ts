import { TodoRepository } from 'src/repositories/todo-repository';
export declare class AppService {
    private readonly todoRepository;
    constructor(todoRepository: TodoRepository);
    findAll(): import("src/repositories/todo-repository").Todo[];
    createTodo(todo: TodoDto): void;
    updateTodo(id: string, isCompleted: boolean): void;
}
