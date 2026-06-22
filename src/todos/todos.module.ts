import { Module } from '@nestjs/common';
import { TodoEntity } from './todo.entity';
import { TodosController } from './todos.controllers';
import { TodosService } from './todos.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
