import { UserCreateNestedManyWithoutAccountsInput } from "./UserCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  accountBdm?: string | null;
  accountDesc?: string | null;
  accountDm?: string | null;
  accountEndDate?: Date | null;
  accountId?: string | null;
  accountName?: string | null;
  accountPm?: string | null;
  accountStatus?: "Active" | "InActive" | null;
  accountStDate?: Date | null;
  userId?: UserCreateNestedManyWithoutAccountsInput;
};
