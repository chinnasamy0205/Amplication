import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeatureListRelationFilter } from "../feature/FeatureListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RequirementWhereInput = {
  id?: StringFilter;
  modelChanged?: IntNullableFilter;
  reqDesc?: StringNullableFilter;
  reqFeatureId?: FeatureListRelationFilter;
  reqId?: StringNullableFilter;
  reqModelname?: StringNullableFilter;
  reqModelpath?: StringNullableFilter;
  reqName?: StringNullableFilter;
  reqPrereq?: StringNullableFilter;
  reqType?: StringNullableFilter;
  status?: "Active" | "InActive";
  userId?: UserListRelationFilter;
};
