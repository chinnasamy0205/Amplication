import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { AccountUserWhereUniqueInput } from "../accountUser/AccountUserWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../feature/FeatureWhereUniqueInput";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { RequirementListRelationFilter } from "../requirement/RequirementListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  hmProtestAccounts?: AccountListRelationFilter;
  hmProtestAccountUser?: AccountUserWhereUniqueInput;
  hmProtestFeature?: FeatureWhereUniqueInput;
  hmProtestProjects?: ProjectListRelationFilter;
  hmProtestRequirements?: RequirementListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userDesc?: StringNullableFilter;
  userEndDate?: DateTimeNullableFilter;
  username?: StringFilter;
  userPlan?: "Basic" | "Full" | "Free";
  userStatus?: "Active" | "InActive";
  userStDate?: DateTimeNullableFilter;
};
