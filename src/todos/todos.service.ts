import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}
  async create(dto: { title: string }): Promise<TodoEntity> {
    const todo = this.todoRepository.create({ title });
    return this.todoRepository.save(todo);
  }
}
