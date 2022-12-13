import { HmProtestAccount } from "../hmProtestAccount/HmProtestAccount";
import { User } from "../user/User";

export type HmProtestProject = {
  accountId?: Array<HmProtestAccount>;
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
