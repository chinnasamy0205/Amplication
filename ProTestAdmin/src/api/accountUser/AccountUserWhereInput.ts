import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type AccountUserWhereInput = {
  accountId?: AccountListRelationFilter;
  id?: StringFilter;
  userAccountRole?: IntNullableFilter;
  userId?: UserListRelationFilter;
};
