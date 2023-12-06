import { AppService } from '../services/app.service';
import { TodoDto } from 'src/dto/todo-dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(): Promise<import("../repositories/todo-repository").Todo[]>;
    create(todo: TodoDto): void;
    update(body: {
        isCompleted: boolean;
    }, id: string): void;
    delete(id: string): void;
}
