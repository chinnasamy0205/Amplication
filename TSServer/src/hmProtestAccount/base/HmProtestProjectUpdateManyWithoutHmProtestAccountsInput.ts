/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { HmProtestProjectWhereUniqueInput } from "../../hmProtestProject/base/HmProtestProjectWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class HmProtestProjectUpdateManyWithoutHmProtestAccountsInput {
  @Field(() => [HmProtestProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HmProtestProjectWhereUniqueInput],
  })
  connect?: Array<HmProtestProjectWhereUniqueInput>;

  @Field(() => [HmProtestProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HmProtestProjectWhereUniqueInput],
  })
  disconnect?: Array<HmProtestProjectWhereUniqueInput>;

  @Field(() => [HmProtestProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HmProtestProjectWhereUniqueInput],
  })
  set?: Array<HmProtestProjectWhereUniqueInput>;
}
export { HmProtestProjectUpdateManyWithoutHmProtestAccountsInput };