import { HmProtestAccountUpdateManyWithoutHmProtestAccountUsersInput } from "./HmProtestAccountUpdateManyWithoutHmProtestAccountUsersInput";
import { UserUpdateManyWithoutHmProtestAccountUsersInput } from "./UserUpdateManyWithoutHmProtestAccountUsersInput";

export type HmProtestAccountUserUpdateInput = {
  accountId?: HmProtestAccountUpdateManyWithoutHmProtestAccountUsersInput;
  userAccountRole?: number | null;
  userId?: UserUpdateManyWithoutHmProtestAccountUsersInput;
};
