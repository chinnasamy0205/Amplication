import { AccountUserCreateNestedManyWithoutAccountsInput } from "./AccountUserCreateNestedManyWithoutAccountsInput";
import { ProjectCreateNestedManyWithoutAccountsInput } from "./ProjectCreateNestedManyWithoutAccountsInput";
import { UserCreateNestedManyWithoutAccountsInput } from "./UserCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  accountBdm?: string | null;
  accountDesc?: string | null;
  accountDm?: string | null;
  accountEndDate?: Date | null;
  accountId?: string | null;
  accountName: string;
  accountPm?: string | null;
  accountStatus?: "Active" | "InActive" | null;
  accountStDate: Date;
  hmProtestAccountUsers?: AccountUserCreateNestedManyWithoutAccountsInput;
  hmProtestProjects?: ProjectCreateNestedManyWithoutAccountsInput;
  userId?: UserCreateNestedManyWithoutAccountsInput;
};
