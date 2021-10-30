import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [PrismaService],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
