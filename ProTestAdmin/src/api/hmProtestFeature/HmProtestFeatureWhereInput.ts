import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { HmProtestRequirementListRelationFilter } from "../hmProtestRequirement/HmProtestRequirementListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type HmProtestFeatureWhereInput = {
  featureDesc?: StringNullableFilter;
  featureEndDate?: DateTimeNullableFilter;
  featureId?: StringFilter;
  featureName?: StringFilter;
  featurePrereq?: StringNullableFilter;
  featureProjId?: StringNullableFilter;
  featureStDate?: DateTimeFilter;
  hmProtestRequirements?: HmProtestRequirementListRelationFilter;
  id?: StringFilter;
  userId?: UserListRelationFilter;
};
