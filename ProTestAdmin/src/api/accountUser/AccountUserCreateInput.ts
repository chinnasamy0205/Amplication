import { AccountCreateNestedManyWithoutAccountUsersInput } from "./AccountCreateNestedManyWithoutAccountUsersInput";
import { UserCreateNestedManyWithoutAccountUsersInput } from "./UserCreateNestedManyWithoutAccountUsersInput";

export type AccountUserCreateInput = {
  accountId?: AccountCreateNestedManyWithoutAccountUsersInput;
  userAccountRole?: number | null;
  userId?: UserCreateNestedManyWithoutAccountUsersInput;
};
