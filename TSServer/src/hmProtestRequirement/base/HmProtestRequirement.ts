/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsInt,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { HmProtestFeature } from "../../hmProtestFeature/base/HmProtestFeature";
import { EnumHmProtestRequirementStatus } from "./EnumHmProtestRequirementStatus";
import { User } from "../../user/base/User";
@ObjectType()
class HmProtestRequirement {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  modelChanged!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reqDesc!: string | null;

  @ApiProperty({
    required: false,
    type: () => [HmProtestFeature],
  })
  @ValidateNested()
  @Type(() => HmProtestFeature)
  @IsOptional()
  reqFeatureId?: Array<HmProtestFeature>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reqId!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reqModelname!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reqModelpath!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reqName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reqPrereq!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reqType!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumHmProtestRequirementStatus,
  })
  @IsEnum(EnumHmProtestRequirementStatus)
  @IsOptional()
  @Field(() => EnumHmProtestRequirementStatus, {
    nullable: true,
  })
  status?: "Active" | "InActive" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  userId?: Array<User>;
}
export { HmProtestRequirement };
