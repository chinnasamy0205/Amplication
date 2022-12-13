import { HmProtestAccountCreateNestedManyWithoutHmProtestAccountUsersInput } from "./HmProtestAccountCreateNestedManyWithoutHmProtestAccountUsersInput";
import { UserCreateNestedManyWithoutHmProtestAccountUsersInput } from "./UserCreateNestedManyWithoutHmProtestAccountUsersInput";

export type HmProtestAccountUserCreateInput = {
  accountId?: HmProtestAccountCreateNestedManyWithoutHmProtestAccountUsersInput;
  userAccountRole?: number | null;
  userId?: UserCreateNestedManyWithoutHmProtestAccountUsersInput;
};
