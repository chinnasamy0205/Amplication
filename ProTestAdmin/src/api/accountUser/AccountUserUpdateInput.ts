import { AccountUpdateManyWithoutAccountUsersInput } from "./AccountUpdateManyWithoutAccountUsersInput";
import { UserUpdateManyWithoutAccountUsersInput } from "./UserUpdateManyWithoutAccountUsersInput";

export type AccountUserUpdateInput = {
  accountId?: AccountUpdateManyWithoutAccountUsersInput;
  userAccountRole?: number | null;
  userId?: UserUpdateManyWithoutAccountUsersInput;
};
