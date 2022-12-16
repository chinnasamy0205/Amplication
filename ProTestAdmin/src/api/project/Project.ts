import { Account } from "../account/Account";
import { User } from "../user/User";

export type Project = {
  accountId?: Array<Account>;
  createdAt: Date;
  id: string;
  projectDesc: string | null;
  projectEndDate: Date | null;
  projectId: string | null;
  projectName: string | null;
  projectStDate: Date | null;
  updatedAt: Date;
  userId?: Array<User>;
};
