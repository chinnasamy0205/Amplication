export class FloatNullableFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: number;
}
;

@InputType({
  isAbstract: true,
  description: undefined,
})
export class FloatNullableFilter {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  equals?: number | null;

  @ApiProperty({
    required: false,
    type: [Number],
  })
  @IsOptional()
  @Field(() => [Float], {
    nullable: true,
  })
  @Type(() => Number)
  in?: number[] | null;

  @ApiProperty({
    required: false,
    type: [Number],
  })
  @IsOptional()
  @Field(() => [Float], {
    nullable: true,
  })
  @Type(() => Number)
  notIn?: number[] | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  lt?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  lte?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  gt?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  gte?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  not?: number;
}
