import { AccountUser } from "../accountUser/AccountUser";
import { Project } from "../project/Project";
import { User } from "../user/User";

export type Account = {
  accountBdm: string | null;
  accountDesc: string | null;
  accountDm: string | null;
  accountEndDate: Date | null;
  accountId: string | null;
  accountName: string;
  accountPm: string | null;
  accountStatus?: "Active" | "InActive" | null;
  accountStDate: Date;
  createdAt: Date;
  hmProtestAccountUsers?: Array<AccountUser>;
  hmProtestProjects?: Array<Project>;
  id: string;
  updatedAt: Date;
  userId?: Array<User>;
};
