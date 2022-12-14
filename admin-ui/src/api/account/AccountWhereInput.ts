import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type AccountWhereInput = {
  accountBdm?: StringNullableFilter;
  accountDesc?: StringNullableFilter;
  accountDm?: StringNullableFilter;
  accountEndDate?: DateTimeNullableFilter;
  accountId?: StringNullableFilter;
  accountName?: StringNullableFilter;
  accountPm?: StringNullableFilter;
  accountStatus?: "Active" | "InActive";
  accountStDate?: DateTimeNullableFilter;
  id?: StringFilter;
  userId?: UserListRelationFilter;
};
