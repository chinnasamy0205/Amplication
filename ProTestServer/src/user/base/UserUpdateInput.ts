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
  ValidateNested,
  IsJSON,
  IsDate,
  IsEnum,
} from "class-validator";
import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { AccountUserWhereUniqueInput } from "../../accountUser/base/AccountUserWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../../feature/base/FeatureWhereUniqueInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { RequirementUpdateManyWithoutUsersInput } from "./RequirementUpdateManyWithoutUsersInput";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumUserUserPlan } from "./EnumUserUserPlan";
import { EnumUserUserStatus } from "./EnumUserUserStatus";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => AccountUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AccountUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AccountUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  hmProtestAccounts?: AccountUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => AccountUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountUserWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountUserWhereUniqueInput, {
    nullable: true,
  })
  hmProtestAccountUser?: AccountUserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FeatureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FeatureWhereUniqueInput)
  @IsOptional()
  @Field(() => FeatureWhereUniqueInput, {
    nullable: true,
  })
  hmProtestFeature?: FeatureWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProjectUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProjectUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProjectUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  hmProtestProjects?: ProjectUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => RequirementUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => RequirementUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => RequirementUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  hmProtestRequirements?: RequirementUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userDesc?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  userEndDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    enum: EnumUserUserPlan,
  })
  @IsEnum(EnumUserUserPlan)
  @IsOptional()
  @Field(() => EnumUserUserPlan, {
    nullable: true,
  })
  userPlan?: "Basic" | "Full" | "Free" | null;

  @ApiProperty({
    required: false,
    enum: EnumUserUserStatus,
  })
  @IsEnum(EnumUserUserStatus)
  @IsOptional()
  @Field(() => EnumUserUserStatus, {
    nullable: true,
  })
  userStatus?: "Active" | "InActive" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  userStDate?: Date | null;
}
export { UserUpdateInput };
