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
import { IsDate, IsString, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Project } from "../../project/base/Project";
import { Requirement } from "../../requirement/base/Requirement";
import { User } from "../../user/base/User";
@ObjectType()
class Feature {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  featureDesc!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  featureEndDate!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  featureId!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  featureName!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  featurePrereq!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Project],
  })
  @ValidateNested()
  @Type(() => Project)
  @IsOptional()
  featureProjId?: Array<Project>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  featureStDate!: Date;

  @ApiProperty({
    required: false,
    type: () => [Requirement],
  })
  @ValidateNested()
  @Type(() => Requirement)
  @IsOptional()
  hmProtestRequirements?: Array<Requirement>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
export { Feature };
