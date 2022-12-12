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
import { HmProtestAccountUpdateManyWithoutHmProtestAccountUsersInput } from "./HmProtestAccountUpdateManyWithoutHmProtestAccountUsersInput";
import { ValidateNested, IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserUpdateManyWithoutHmProtestAccountUsersInput } from "./UserUpdateManyWithoutHmProtestAccountUsersInput";
@InputType()
class HmProtestAccountUserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => HmProtestAccountUpdateManyWithoutHmProtestAccountUsersInput,
  })
  @ValidateNested()
  @Type(() => HmProtestAccountUpdateManyWithoutHmProtestAccountUsersInput)
  @IsOptional()
  @Field(() => HmProtestAccountUpdateManyWithoutHmProtestAccountUsersInput, {
    nullable: true,
  })
  accountId?: HmProtestAccountUpdateManyWithoutHmProtestAccountUsersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  userAccountRole?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutHmProtestAccountUsersInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutHmProtestAccountUsersInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutHmProtestAccountUsersInput, {
    nullable: true,
  })
  userId?: UserUpdateManyWithoutHmProtestAccountUsersInput;
}
export { HmProtestAccountUserUpdateInput };
