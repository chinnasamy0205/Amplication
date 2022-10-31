import { InputJsonValue } from "../types";
export class JsonFilter {
  equals?: InputJsonValue;
  not?: InputJsonValue;
}
rom "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../types";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class JsonFilter {
  @ApiProperty({
    required: false,
    type: GraphQLJSONObject,
  })
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  equals?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: GraphQLJSONObject,
  })
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  not?: InputJsonValue;
}
