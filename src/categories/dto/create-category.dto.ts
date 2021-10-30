import { ApiProperty } from '@nestjs/swagger';
export class CreateCategoryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty({ required: false })
  description?: string;
}
