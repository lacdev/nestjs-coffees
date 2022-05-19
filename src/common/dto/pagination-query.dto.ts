// import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

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
