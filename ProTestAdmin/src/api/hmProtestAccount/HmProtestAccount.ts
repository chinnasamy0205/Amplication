import { HmProtestAccountUser } from "../hmProtestAccountUser/HmProtestAccountUser";
import { HmProtestProject } from "../hmProtestProject/HmProtestProject";
import { User } from "../user/User";

export type HmProtestAccount = {
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
  hmProtestAccountUsers?: Array<HmProtestAccountUser>;
  hmProtestProjects?: Array<HmProtestProject>;
  id: string;
  updatedAt: Date;
  userId?: Array<User>;
};
