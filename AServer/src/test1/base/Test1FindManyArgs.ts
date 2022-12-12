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
import { Test1WhereInput } from "./Test1WhereInput";
import { Type } from "class-transformer";
import { Test1OrderByInput } from "./Test1OrderByInput";

@ArgsType()
class Test1FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => Test1WhereInput,
  })
  @Field(() => Test1WhereInput, { nullable: true })
  @Type(() => Test1WhereInput)
  where?: Test1WhereInput;

  @ApiProperty({
    required: false,
    type: [Test1OrderByInput],
  })
  @Field(() => [Test1OrderByInput], { nullable: true })
  @Type(() => Test1OrderByInput)
  orderBy?: Array<Test1OrderByInput>;

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

export { Test1FindManyArgs };
