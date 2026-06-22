import { Controller, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Post()
  create() {
    return 'This action adds a new todo';
  }
}
