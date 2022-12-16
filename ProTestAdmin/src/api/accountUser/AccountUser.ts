import { Account } from "../account/Account";
import { User } from "../user/User";

export type AccountUser = {
  accountId?: Array<Account>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userAccountRole: number | null;
  userId?: Array<User>;
};
