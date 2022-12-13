import { HmProtestAccountListRelationFilter } from "../hmProtestAccount/HmProtestAccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type HmProtestAccountUserWhereInput = {
  accountId?: HmProtestAccountListRelationFilter;
  id?: StringFilter;
  userAccountRole?: IntNullableFilter;
  userId?: UserListRelationFilter;
};
