import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HmProtestFeatureListRelationFilter } from "../hmProtestFeature/HmProtestFeatureListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type HmProtestRequirementWhereInput = {
  id?: StringFilter;
  modelChanged?: IntNullableFilter;
  reqDesc?: StringNullableFilter;
  reqFeatureId?: HmProtestFeatureListRelationFilter;
  reqId?: StringNullableFilter;
  reqModelname?: StringNullableFilter;
  reqModelpath?: StringNullableFilter;
  reqName?: StringNullableFilter;
  reqPrereq?: StringNullableFilter;
  reqType?: StringNullableFilter;
  status?: "Active" | "InActive";
  userId?: UserListRelationFilter;
};
