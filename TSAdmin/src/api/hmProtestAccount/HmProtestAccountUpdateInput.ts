import { HmProtestAccountUserUpdateManyWithoutHmProtestAccountsInput } from "./HmProtestAccountUserUpdateManyWithoutHmProtestAccountsInput";
import { HmProtestProjectUpdateManyWithoutHmProtestAccountsInput } from "./HmProtestProjectUpdateManyWithoutHmProtestAccountsInput";
import { UserUpdateManyWithoutHmProtestAccountsInput } from "./UserUpdateManyWithoutHmProtestAccountsInput";

export type HmProtestAccountUpdateInput = {
  accountBdm?: string | null;
  accountDesc?: string | null;
  accountDm?: string | null;
  accountEndDate?: Date | null;
  accountId?: string | null;
  accountName?: string;
  accountPm?: string | null;
  accountStatus?: "Active" | "InActive" | null;
  accountStDate?: Date;
  hmProtestAccountUsers?: HmProtestAccountUserUpdateManyWithoutHmProtestAccountsInput;
  hmProtestProjects?: HmProtestProjectUpdateManyWithoutHmProtestAccountsInput;
  userId?: UserUpdateManyWithoutHmProtestAccountsInput;
};
