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
import { IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProjectUpdateManyWithoutFeaturesInput } from "./ProjectUpdateManyWithoutFeaturesInput";
import { RequirementUpdateManyWithoutFeaturesInput } from "./RequirementUpdateManyWithoutFeaturesInput";
import { UserUpdateManyWithoutFeaturesInput } from "./UserUpdateManyWithoutFeaturesInput";
@InputType()
class FeatureUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  featureDesc?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  featureEndDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  featureId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  featureName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  featurePrereq?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProjectUpdateManyWithoutFeaturesInput,
  })
  @ValidateNested()
  @Type(() => ProjectUpdateManyWithoutFeaturesInput)
  @IsOptional()
  @Field(() => ProjectUpdateManyWithoutFeaturesInput, {
    nullable: true,
  })
  featureProjId?: ProjectUpdateManyWithoutFeaturesInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  featureStDate?: Date;

  @ApiProperty({
    required: false,
    type: () => RequirementUpdateManyWithoutFeaturesInput,
  })
  @ValidateNested()
  @Type(() => RequirementUpdateManyWithoutFeaturesInput)
  @IsOptional()
  @Field(() => RequirementUpdateManyWithoutFeaturesInput, {
    nullable: true,
  })
  hmProtestRequirements?: RequirementUpdateManyWithoutFeaturesInput;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutFeaturesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutFeaturesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutFeaturesInput, {
    nullable: true,
  })
  userId?: UserUpdateManyWithoutFeaturesInput;
}
export { FeatureUpdateInput };
