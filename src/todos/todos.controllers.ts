import { Body, Controller, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Post()
  create(@Body() data: CreateTodoDto) {
    return this.todosService.create(data);
  }
}
