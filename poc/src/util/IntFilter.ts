export class IntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: number;
}
pe } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class IntFilter {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  equals?: number;

  @ApiProperty({
    required: false,
    type: [Number],
  })
  @IsOptional()
  @Field(() => [Int], {
    nullable: true,
  })
  @Type(() => Number)
  in?: number[];

  @ApiProperty({
    required: false,
    type: [Number],
  })
  @IsOptional()
  @Field(() => [Int], {
    nullable: true,
  })
  @Type(() => Number)
  notIn?: number[];

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  lt?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  lte?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  gt?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  gte?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  not?: number;
}
