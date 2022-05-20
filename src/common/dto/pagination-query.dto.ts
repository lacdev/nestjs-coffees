// import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

/* It's a class that contains two optional properties, limit and offset, which are both positive numbers */
export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  //   @Type(() => Number) // We are using enableImplicitConversion: true on main.ts,
  limit: number;

  @IsOptional()
  @IsPositive()
  //   @Type(() => Number)
  offset: number;
}
