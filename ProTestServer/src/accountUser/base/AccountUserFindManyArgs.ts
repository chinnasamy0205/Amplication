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
import { AccountUserWhereInput } from "./AccountUserWhereInput";
import { Type } from "class-transformer";
import { AccountUserOrderByInput } from "./AccountUserOrderByInput";

@ArgsType()
class AccountUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AccountUserWhereInput,
  })
  @Field(() => AccountUserWhereInput, { nullable: true })
  @Type(() => AccountUserWhereInput)
  where?: AccountUserWhereInput;

  @ApiProperty({
    required: false,
    type: [AccountUserOrderByInput],
  })
  @Field(() => [AccountUserOrderByInput], { nullable: true })
  @Type(() => AccountUserOrderByInput)
  orderBy?: Array<AccountUserOrderByInput>;

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

export { AccountUserFindManyArgs };