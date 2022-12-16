/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RequirementWhereInput } from "./RequirementWhereInput";
import { Type } from "class-transformer";
import { RequirementOrderByInput } from "./RequirementOrderByInput";

@ArgsType()
class RequirementFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RequirementWhereInput,
  })
  @Field(() => RequirementWhereInput, { nullable: true })
  @Type(() => RequirementWhereInput)
  where?: RequirementWhereInput;

  @ApiProperty({
    required: false,
    type: [RequirementOrderByInput],
  })
  @Field(() => [RequirementOrderByInput], { nullable: true })
  @Type(() => RequirementOrderByInput)
  orderBy?: Array<RequirementOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RequirementFindManyArgs };
