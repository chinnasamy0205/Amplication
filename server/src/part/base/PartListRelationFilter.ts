/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PartWhereInput } from "./PartWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PartListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PartWhereInput,
  })
  @ValidateNested()
  @Type(() => PartWhereInput)
  @IsOptional()
  @Field(() => PartWhereInput, {
    nullable: true,
  })
  every?: PartWhereInput;

  @ApiProperty({
    required: false,
    type: () => PartWhereInput,
  })
  @ValidateNested()
  @Type(() => PartWhereInput)
  @IsOptional()
  @Field(() => PartWhereInput, {
    nullable: true,
  })
  some?: PartWhereInput;

  @ApiProperty({
    required: false,
    type: () => PartWhereInput,
  })
  @ValidateNested()
  @Type(() => PartWhereInput)
  @IsOptional()
  @Field(() => PartWhereInput, {
    nullable: true,
  })
  none?: PartWhereInput;
}
export { PartListRelationFilter };
