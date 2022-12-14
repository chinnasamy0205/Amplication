import { User } from "../user/User";

export type Account = {
  accountBdm: string | null;
  accountDesc: string | null;
  accountDm: string | null;
  accountEndDate: Date | null;
  accountId: string | null;
  accountName: string | null;
  accountPm: string | null;
  accountStatus?: "Active" | "InActive" | null;
  accountStDate: Date | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userId?: Array<User>;
};
