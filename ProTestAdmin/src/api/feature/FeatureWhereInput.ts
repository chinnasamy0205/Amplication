import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { RequirementListRelationFilter } from "../requirement/RequirementListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type FeatureWhereInput = {
  featureDesc?: StringNullableFilter;
  featureEndDate?: DateTimeNullableFilter;
  featureId?: StringFilter;
  featureName?: StringFilter;
  featurePrereq?: StringNullableFilter;
  featureProjId?: ProjectListRelationFilter;
  featureStDate?: DateTimeFilter;
  hmProtestRequirements?: RequirementListRelationFilter;
  id?: StringFilter;
  userId?: UserListRelationFilter;
};
