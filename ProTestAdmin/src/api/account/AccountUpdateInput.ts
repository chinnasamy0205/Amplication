import { AccountUserUpdateManyWithoutAccountsInput } from "./AccountUserUpdateManyWithoutAccountsInput";
import { ProjectUpdateManyWithoutAccountsInput } from "./ProjectUpdateManyWithoutAccountsInput";
import { UserUpdateManyWithoutAccountsInput } from "./UserUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  accountBdm?: string | null;
  accountDesc?: string | null;
  accountDm?: string | null;
  accountEndDate?: Date | null;
  accountId?: string | null;
  accountName?: string;
  accountPm?: string | null;
  accountStatus?: "Active" | "InActive" | null;
  accountStDate?: Date;
  hmProtestAccountUsers?: AccountUserUpdateManyWithoutAccountsInput;
  hmProtestProjects?: ProjectUpdateManyWithoutAccountsInput;
  userId?: UserUpdateManyWithoutAccountsInput;
};
