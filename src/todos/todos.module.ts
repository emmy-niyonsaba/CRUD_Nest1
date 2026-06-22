import { Module } from '@nestjs/common';
import { TodoEntity } from './todo.entity';

@Module({
  imports: [TodoEntity],
})
export class TodosModule {}
