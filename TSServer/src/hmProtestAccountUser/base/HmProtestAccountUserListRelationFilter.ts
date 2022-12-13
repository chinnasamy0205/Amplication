/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HmProtestAccountUserWhereInput } from "./HmProtestAccountUserWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HmProtestAccountUserListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HmProtestAccountUserWhereInput,
  })
  @ValidateNested()
  @Type(() => HmProtestAccountUserWhereInput)
  @IsOptional()
  @Field(() => HmProtestAccountUserWhereInput, {
    nullable: true,
  })
  every?: HmProtestAccountUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => HmProtestAccountUserWhereInput,
  })
  @ValidateNested()
  @Type(() => HmProtestAccountUserWhereInput)
  @IsOptional()
  @Field(() => HmProtestAccountUserWhereInput, {
    nullable: true,
  })
  some?: HmProtestAccountUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => HmProtestAccountUserWhereInput,
  })
  @ValidateNested()
  @Type(() => HmProtestAccountUserWhereInput)
  @IsOptional()
  @Field(() => HmProtestAccountUserWhereInput, {
    nullable: true,
  })
  none?: HmProtestAccountUserWhereInput;
}
export { HmProtestAccountUserListRelationFilter };