import { Account } from "../account/Account";
import { Feature } from "../feature/Feature";
import { User } from "../user/User";

export type Project = {
  accountId?: Array<Account>;
  createdAt: Date;
  features?: Array<Feature>;
  id: string;
  projectDesc: string | null;
  projectEndDate: Date | null;
  projectId: string | null;
  projectName: string | null;
  projectStDate: Date | null;
  updatedAt: Date;
  userId?: Array<User>;
};
