import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Post()
  create(@Body() data: CreateTodoDto) {
    return this.todosService.create(data);
  }
  @Get()
  findAll() {
    return this.todosService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todosService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() data: CreateTodoDto) {
    return this.todosService.update(id, data);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.todosService.remove(id);
  }
}
