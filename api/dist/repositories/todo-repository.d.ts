import { PrismaService } from '../prisma.service';
import { TodoDto } from "src/dto/todo-dto";
export interface Todo {
    id: string;
    title: string;
    isCompleted: boolean;
}
export declare class TodoRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createTodo(todo: TodoDto): Promise<void>;
    findAll(): Promise<Todo[]>;
    updateTodo(id: string, isCompleted: boolean): Promise<void>;
    deleteTodo(id: string): Promise<void>;
}
