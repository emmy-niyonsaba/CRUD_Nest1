import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { CreateTodoDto } from './todos.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}
  async create(dto: CreateTodoDto): Promise<TodoEntity> {
    const todo = this.todoRepository.create(dto);
    return this.todoRepository.save(todo);
  }
  async findAll(): Promise<TodoEntity[]> {
    return this.todoRepository.find();
  }
  async findOne(id: number) {
    return this.todoRepository.findOneBy({ id });
  }
  async update(id: number, dto: CreateTodoDto) {
    await this.todoRepository.update(id, dto);
    return this.findOne(id);
  }
  async remove(id: number) {
    await this.todoRepository.delete(id);
    return { deleted: true };
  }
}
