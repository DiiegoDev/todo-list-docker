export interface Todo {
    id: string;
    title: string;
    content: string;
    isCompleted: boolean;
}
export declare class TodoRepository {
    private todos;
    createTodo(todo: Todo): void;
    findAll(): Todo[];
    updateTodo(id: string, isCompleted: boolean): void;
}
