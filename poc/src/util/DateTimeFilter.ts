export class DateTimeFilter {
  equals?: Date;
  not?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
}
t { Type } from "class-transformer";
@InputType({
  isAbstract: true,
  description: undefined,
})
export class DateTimeFilter {
  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  equals?: Date;

  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  not?: Date;

  @ApiProperty({
    required: false,
    type: [Date],
  })
  @IsOptional()
  @Field(() => [Date], {
    nullable: true,
  })
  @Type(() => Date)
  in?: Date[];

  @ApiProperty({
    required: false,
    type: [Date],
  })
  @IsOptional()
  @Field(() => [Date], {
    nullable: true,
  })
  @Type(() => Date)
  notIn?: Date[];

  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  lt?: Date;

  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  lte?: Date;

  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  gt?: Date;

  @ApiProperty({
    required: false,
    type: Date,
  })
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  gte?: Date;
}
