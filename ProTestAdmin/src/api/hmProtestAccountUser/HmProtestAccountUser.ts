import { HmProtestAccount } from "../hmProtestAccount/HmProtestAccount";
import { User } from "../user/User";

export type HmProtestAccountUser = {
  accountId?: Array<HmProtestAccount>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userAccountRole: number | null;
  userId?: Array<User>;
};
