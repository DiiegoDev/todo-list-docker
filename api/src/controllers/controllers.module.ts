import { Module } from '@nestjs/common';
import { AppController } from './app.controller'
import { AppService } from 'src/services/app.service';
import { TodoRepository } from 'src/repositories/todo-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TodoRepository],
})
export class ControllerModule {}