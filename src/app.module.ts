import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { CategoriesModule } from './categories/categories.module';
//import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), CategoriesModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
