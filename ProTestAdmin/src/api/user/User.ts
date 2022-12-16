import { Account } from "../account/Account";
import { AccountUser } from "../accountUser/AccountUser";
import { Feature } from "../feature/Feature";
import { Project } from "../project/Project";
import { Requirement } from "../requirement/Requirement";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  hmProtestAccounts?: Array<Account>;
  hmProtestAccountUser?: AccountUser | null;
  hmProtestFeature?: Feature | null;
  hmProtestProjects?: Array<Project>;
  hmProtestRequirements?: Array<Requirement>;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userDesc: string | null;
  userEndDate: Date | null;
  username: string;
  userPlan?: "Basic" | "Full" | "Free" | null;
  userStatus?: "Active" | "InActive" | null;
  userStDate: Date | null;
};
