import { Controller, Get, Param } from "@nestjs/common";

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns cat with id ${params.id}`;
  }
}