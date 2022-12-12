import { HmProtestAccountUserCreateNestedManyWithoutHmProtestAccountsInput } from "./HmProtestAccountUserCreateNestedManyWithoutHmProtestAccountsInput";
import { HmProtestProjectCreateNestedManyWithoutHmProtestAccountsInput } from "./HmProtestProjectCreateNestedManyWithoutHmProtestAccountsInput";
import { UserCreateNestedManyWithoutHmProtestAccountsInput } from "./UserCreateNestedManyWithoutHmProtestAccountsInput";

export type HmProtestAccountCreateInput = {
  accountBdm?: string | null;
  accountDesc?: string | null;
  accountDm?: string | null;
  accountEndDate?: Date | null;
  accountId?: string | null;
  accountName: string;
  accountPm?: string | null;
  accountStatus?: "Active" | "InActive" | null;
  accountStDate: Date;
  hmProtestAccountUsers?: HmProtestAccountUserCreateNestedManyWithoutHmProtestAccountsInput;
  hmProtestProjects?: HmProtestProjectCreateNestedManyWithoutHmProtestAccountsInput;
  userId?: UserCreateNestedManyWithoutHmProtestAccountsInput;
};
