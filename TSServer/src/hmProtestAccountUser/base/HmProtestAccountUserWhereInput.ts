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
import { HmProtestAccountListRelationFilter } from "../../hmProtestAccount/base/HmProtestAccountListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";
@InputType()
class HmProtestAccountUserWhereInput {
  @ApiProperty({
    required: false,
    type: () => HmProtestAccountListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HmProtestAccountListRelationFilter)
  @IsOptional()
  @Field(() => HmProtestAccountListRelationFilter, {
    nullable: true,
  })
  accountId?: HmProtestAccountListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  userAccountRole?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  userId?: UserListRelationFilter;
}
export { HmProtestAccountUserWhereInput };
