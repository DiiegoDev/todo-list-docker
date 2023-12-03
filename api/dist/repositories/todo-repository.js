"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const common_1 = require("@nestjs/common");
let TodoRepository = class TodoRepository {
    constructor() {
        this.todos = [];
    }
    createTodo(todo) {
        this.todos.push(todo);
    }
    findAll() {
        return this.todos;
    }
    updateTodo(id, isCompleted) {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            this.todos[todoIndex].isCompleted = isCompleted;
        }
    }
};
exports.TodoRepository = TodoRepository;
exports.TodoRepository = TodoRepository = __decorate([
    (0, common_1.Injectable)()
], TodoRepository);
//# sourceMappingURL=todo-repository.js.map