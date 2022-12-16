import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ProjectWhereInput = {
  accountId?: AccountListRelationFilter;
  id?: StringFilter;
  projectDesc?: StringNullableFilter;
  projectEndDate?: DateTimeNullableFilter;
  projectId?: StringNullableFilter;
  projectName?: StringNullableFilter;
  projectStDate?: DateTimeNullableFilter;
  userId?: UserListRelationFilter;
};
