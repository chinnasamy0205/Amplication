/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { CategorymgtWhereUniqueInput } from "./CategorymgtWhereUniqueInput";
import { CategorymgtUpdateInput } from "./CategorymgtUpdateInput";

@ArgsType()
class UpdateCategorymgtArgs {
  @Field(() => CategorymgtWhereUniqueInput, { nullable: false })
  where!: CategorymgtWhereUniqueInput;
  @Field(() => CategorymgtUpdateInput, { nullable: false })
  data!: CategorymgtUpdateInput;
}

export { UpdateCategorymgtArgs };
