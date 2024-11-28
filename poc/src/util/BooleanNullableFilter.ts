export class BooleanNullableFilter {
  equals?: boolean | null;
  not?: boolean | null;
}
wagger";
import { IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType({
  isAbstract: true,
  description: undefined,
})
export class BooleanNullableFilter {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  @Type(() => Boolean)
  equals?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  @Type(() => Boolean)
  not?: boolean | null;
}
