import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { HmProtestAccountUserListRelationFilter } from "../hmProtestAccountUser/HmProtestAccountUserListRelationFilter";
import { HmProtestProjectListRelationFilter } from "../hmProtestProject/HmProtestProjectListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type HmProtestAccountWhereInput = {
  accountBdm?: StringNullableFilter;
  accountDesc?: StringNullableFilter;
  accountDm?: StringNullableFilter;
  accountEndDate?: DateTimeNullableFilter;
  accountId?: StringNullableFilter;
  accountName?: StringFilter;
  accountPm?: StringNullableFilter;
  accountStatus?: "Active" | "InActive";
  accountStDate?: DateTimeFilter;
  hmProtestAccountUsers?: HmProtestAccountUserListRelationFilter;
  hmProtestProjects?: HmProtestProjectListRelationFilter;
  id?: StringFilter;
  userId?: UserListRelationFilter;
};
