import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { AccountUserListRelationFilter } from "../accountUser/AccountUserListRelationFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type AccountWhereInput = {
  accountBdm?: StringNullableFilter;
  accountDesc?: StringNullableFilter;
  accountDm?: StringNullableFilter;
  accountEndDate?: DateTimeNullableFilter;
  accountId?: StringNullableFilter;
  accountName?: StringFilter;
  accountPm?: StringNullableFilter;
  accountStatus?: "Active" | "InActive";
  accountStDate?: DateTimeFilter;
  hmProtestAccountUsers?: AccountUserListRelationFilter;
  hmProtestProjects?: ProjectListRelationFilter;
  id?: StringFilter;
  userId?: UserListRelationFilter;
};
