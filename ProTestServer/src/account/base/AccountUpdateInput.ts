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
import {
  IsString,
  IsOptional,
  IsDate,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumAccountAccountStatus } from "./EnumAccountAccountStatus";
import { AccountUserUpdateManyWithoutAccountsInput } from "./AccountUserUpdateManyWithoutAccountsInput";
import { ProjectUpdateManyWithoutAccountsInput } from "./ProjectUpdateManyWithoutAccountsInput";
import { UserUpdateManyWithoutAccountsInput } from "./UserUpdateManyWithoutAccountsInput";
@InputType()
class AccountUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountBdm?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountDesc?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountDm?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  accountEndDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountPm?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumAccountAccountStatus,
  })
  @IsEnum(EnumAccountAccountStatus)
  @IsOptional()
  @Field(() => EnumAccountAccountStatus, {
    nullable: true,
  })
  accountStatus?: "Active" | "InActive" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  accountStDate?: Date;

  @ApiProperty({
    required: false,
    type: () => AccountUserUpdateManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => AccountUserUpdateManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => AccountUserUpdateManyWithoutAccountsInput, {
    nullable: true,
  })
  hmProtestAccountUsers?: AccountUserUpdateManyWithoutAccountsInput;

  @ApiProperty({
    required: false,
    type: () => ProjectUpdateManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => ProjectUpdateManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => ProjectUpdateManyWithoutAccountsInput, {
    nullable: true,
  })
  hmProtestProjects?: ProjectUpdateManyWithoutAccountsInput;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutAccountsInput, {
    nullable: true,
  })
  userId?: UserUpdateManyWithoutAccountsInput;
}
export { AccountUpdateInput };
