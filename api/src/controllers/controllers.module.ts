import { Module } from '@nestjs/common';
import { AppController } from './app.controller'
import { AppService } from 'src/services/app.service';
import { TodoRepository } from 'src/repositories/todo-repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TodoRepository, PrismaService],
})
export class ControllerModule {}