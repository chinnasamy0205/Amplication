import { HmProtestAccountListRelationFilter } from "../hmProtestAccount/HmProtestAccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type HmProtestProjectWhereInput = {
  accountId?: HmProtestAccountListRelationFilter;
  id?: StringFilter;
  projectDesc?: StringNullableFilter;
  projectEndDate?: DateTimeNullableFilter;
  projectId?: StringNullableFilter;
  projectName?: StringNullableFilter;
  projectStDate?: DateTimeNullableFilter;
  userId?: UserListRelationFilter;
};
