import { JsonValue } from "type-fest";
export class JsonNullableFilter {
  equals?: JsonValue | null;
  not?: JsonValue | null;
}
agger";
import { IsOptional } from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class JsonNullableFilter {
  @ApiProperty({
    required: false,
    type: GraphQLJSONObject,
  })
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  equals?: JsonValue;

  @ApiProperty({
    required: false,
    type: GraphQLJSONObject,
  })
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  not?: JsonValue;
}
