/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { CategoryMgt2WhereUniqueInput } from "./CategoryMgt2WhereUniqueInput";

@ArgsType()
class DeleteCategoryMgt2Args {
  @Field(() => CategoryMgt2WhereUniqueInput, { nullable: false })
  where!: CategoryMgt2WhereUniqueInput;
}

export { DeleteCategoryMgt2Args };
