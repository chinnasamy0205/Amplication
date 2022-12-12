import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HmProtestAccountListRelationFilter } from "../hmProtestAccount/HmProtestAccountListRelationFilter";
import { HmProtestAccountUserWhereUniqueInput } from "../hmProtestAccountUser/HmProtestAccountUserWhereUniqueInput";
import { HmProtestFeatureWhereUniqueInput } from "../hmProtestFeature/HmProtestFeatureWhereUniqueInput";
import { HmProtestProjectListRelationFilter } from "../hmProtestProject/HmProtestProjectListRelationFilter";
import { HmProtestRequirementListRelationFilter } from "../hmProtestRequirement/HmProtestRequirementListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  hmProtestAccounts?: HmProtestAccountListRelationFilter;
  hmProtestAccountUser?: HmProtestAccountUserWhereUniqueInput;
  hmProtestFeature?: HmProtestFeatureWhereUniqueInput;
  hmProtestProjects?: HmProtestProjectListRelationFilter;
  hmProtestRequirements?: HmProtestRequirementListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userDesc?: StringNullableFilter;
  userEndDate?: DateTimeNullableFilter;
  username?: StringFilter;
  userPlan?: "Basic" | "Full" | "Free";
  userStatus?: "Active" | "InActive";
  userStDate?: DateTimeNullableFilter;
};
