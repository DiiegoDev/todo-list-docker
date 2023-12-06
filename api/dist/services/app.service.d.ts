import { TodoRepository } from 'src/repositories/todo-repository';
import { TodoDto } from 'src/dto/todo-dto';
export declare class AppService {
    private readonly todoRepository;
    constructor(todoRepository: TodoRepository);
    findAll(): Promise<import("src/repositories/todo-repository").Todo[]>;
    createTodo(todo: TodoDto): void;
    updateTodo(id: string, isCompleted: boolean): void;
    deleteTodo(id: string): void;
}
